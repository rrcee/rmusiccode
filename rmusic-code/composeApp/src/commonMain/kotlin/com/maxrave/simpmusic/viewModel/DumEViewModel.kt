package com.maxrave.simpmusic.viewModel

import androidx.lifecycle.viewModelScope
import com.maxrave.common.Config
import com.maxrave.domain.data.entities.SongEntity
import com.maxrave.domain.data.model.searchResult.songs.SongsResult
import com.maxrave.domain.mediaservice.handler.PlaylistType
import com.maxrave.domain.manager.DataStoreManager
import com.maxrave.domain.mediaservice.handler.QueueData
import com.maxrave.domain.repository.SearchRepository
import com.maxrave.domain.repository.SongRepository
import com.maxrave.domain.utils.Resource
import com.maxrave.domain.utils.toTrack
import com.maxrave.simpmusic.viewModel.base.BaseViewModel
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch

/**
 * The single view model behind Dum-E mode. It deliberately exposes only what the four simplified
 * screens need — recents, downloads, a song search and one way to start playback — so the mode has
 * no path to the rest of the app.
 */
class DumEViewModel(
    private val dataStoreManager: DataStoreManager,
    private val songRepository: SongRepository,
    private val searchRepository: SearchRepository,
) : BaseViewModel() {
    /** "Listen Again" is the recently played list, newest first. */
    private val _listenAgain: MutableStateFlow<List<SongEntity>> = MutableStateFlow(emptyList())
    val listenAgain: StateFlow<List<SongEntity>> get() = _listenAgain.asStateFlow()

    val downloads: StateFlow<List<SongEntity>> =
        songRepository
            .getDownloadedSongs()
            .map { it.orEmpty() }
            .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), emptyList())

    private val _searchQuery: MutableStateFlow<String> = MutableStateFlow("")
    val searchQuery: StateFlow<String> get() = _searchQuery.asStateFlow()

    private val _searchState: MutableStateFlow<DumESearchState> = MutableStateFlow(DumESearchState.Idle)
    val searchState: StateFlow<DumESearchState> get() = _searchState.asStateFlow()

    private var searchJob: Job? = null

    init {
        refreshListenAgain()
        // A finished track reorders the recents, so re-read whenever the playing song changes.
        viewModelScope.launch {
            nowPlayingVideoId.collect { refreshListenAgain() }
        }
    }

    fun refreshListenAgain() {
        viewModelScope.launch {
            runCatching { songRepository.getRecentSong(LISTEN_AGAIN_LIMIT, 0) }
                .onSuccess { _listenAgain.value = it }
                .onFailure { log("Dum-E: failed to load recents: ${it.message}") }
        }
    }

    fun onSearchQueryChange(query: String) {
        _searchQuery.value = query
        if (query.isBlank()) {
            searchJob?.cancel()
            _searchState.value = DumESearchState.Idle
        }
    }

    fun search(query: String = _searchQuery.value) {
        val trimmed = query.trim()
        if (trimmed.isEmpty()) {
            _searchState.value = DumESearchState.Idle
            return
        }
        searchJob?.cancel()
        searchJob =
            viewModelScope.launch {
                _searchState.value = DumESearchState.Loading
                searchRepository.getSearchDataSong(trimmed).collect { resource ->
                    when (resource) {
                        is Resource.Success ->
                            _searchState.value =
                                DumESearchState.Results(resource.data?.toList().orEmpty())
                        is Resource.Error ->
                            _searchState.value =
                                DumESearchState.Error(resource.message ?: "Something went wrong")
                    }
                }
            }
    }

    fun clearSearch() {
        searchJob?.cancel()
        _searchQuery.value = ""
        _searchState.value = DumESearchState.Idle
    }

    /**
     * Plays one song on its own radio, the same way the Recently Played row on Home does, so the
     * queue keeps going after it ends instead of falling silent.
     */
    fun playSong(song: SongEntity) {
        val track = song.toTrack()
        setQueueData(
            QueueData.Data(
                listTracks = arrayListOf(track),
                firstPlayedTrack = track,
                playlistId = "RDAMVM${song.videoId}",
                playlistName = PLAYLIST_LABEL,
                playlistType = PlaylistType.RADIO,
                continuation = null,
            ),
        )
        loadMediaItem(track, type = Config.SONG_CLICK)
    }

    fun playSearchResult(result: SongsResult) {
        val track = result.toTrack()
        setQueueData(
            QueueData.Data(
                listTracks = arrayListOf(track),
                firstPlayedTrack = track,
                playlistId = "RDAMVM${result.videoId}",
                playlistName = PLAYLIST_LABEL,
                playlistType = PlaylistType.RADIO,
                continuation = null,
            ),
        )
        loadMediaItem(track, type = Config.SONG_CLICK)
    }

    /** Plays the whole list starting at [index] — used by Downloads, which is a finite list. */
    fun playAll(
        songs: List<SongEntity>,
        index: Int,
        label: String = PLAYLIST_LABEL,
    ) {
        val tracks = songs.map { it.toTrack() }
        val first = tracks.getOrNull(index) ?: return
        setQueueData(
            QueueData.Data(
                listTracks = tracks,
                firstPlayedTrack = first,
                playlistId = null,
                playlistName = label,
                playlistType = PlaylistType.PLAYLIST,
                continuation = null,
            ),
        )
        loadMediaItem(first, type = Config.SONG_CLICK, index = index)
    }

    fun exitDumEMode() {
        viewModelScope.launch {
            dataStoreManager.setDumEMode(false)
        }
    }

    companion object {
        private const val LISTEN_AGAIN_LIMIT = 60
        /**
         * The queue label must NOT be a human-readable mode name: this string rides the shared
         * [QueueData] into the full app's now-playing top bar and queue sheet, and it kept showing
         * "Dum-E" there after the user had left the mode (queue restores, radio continuations and
         * track changes can each rebuild the screen data). Nothing in Dum-E itself renders this
         * field, so the only safe value is the empty one.
         */
        private const val PLAYLIST_LABEL = ""
    }
}

sealed interface DumESearchState {
    data object Idle : DumESearchState

    data object Loading : DumESearchState

    data class Results(
        val songs: List<SongsResult>,
    ) : DumESearchState

    data class Error(
        val message: String,
    ) : DumESearchState
}
