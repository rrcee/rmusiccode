package com.maxrave.data.mediaservice

import com.maxrave.domain.data.player.GenericMediaItem
import com.maxrave.domain.data.player.GenericPlaybackParameters
import com.maxrave.domain.mediaservice.player.MediaPlayerInterface
import com.maxrave.domain.mediaservice.player.MediaPlayerListener
import platform.CoreMedia.*
import platform.AVFoundation.*

import kotlinx.cinterop.ExperimentalForeignApi

@OptIn(ExperimentalForeignApi::class)
class IOSMediaPlayer : MediaPlayerInterface {
    private val player = AVPlayer()
    private val listeners = mutableListOf<MediaPlayerListener>()
    private val queue = mutableListOf<GenericMediaItem>()
    private var currentIndex = 0

    override fun play() {
        player.play()
        listeners.forEach { it.onIsPlayingChanged(true) }
    }

    override fun pause() {
        player.pause()
        listeners.forEach { it.onIsPlayingChanged(false) }
    }

    override fun stop() {
        player.pause()
        listeners.forEach { it.onIsPlayingChanged(false) }
    }

    override fun seekTo(positionMs: Long) {
        val seconds = positionMs / 1000.0
        val cmTime = platform.CoreMedia.CMTimeMakeWithSeconds(seconds, 1000)
        player.seekToTime(cmTime)
    }

    override fun seekTo(mediaItemIndex: Int, positionMs: Long) {
        currentIndex = mediaItemIndex
        loadCurrentItem()
        seekTo(positionMs)
    }

    override fun seekBack() {}

    override fun seekForward() {}

    override fun seekToNext() {
        if (hasNextMediaItem()) {
            currentIndex++
            loadCurrentItem()
            play()
        }
    }

    override fun seekToPrevious() {
        if (hasPreviousMediaItem()) {
            currentIndex--
            loadCurrentItem()
            play()
        }
    }

    override fun seekToPreviousMediaItem() {
        if (hasPreviousMediaItem()) {
            currentIndex--
            loadCurrentItem()
            play()
        }
    }

    override fun prepare() {}

    override fun setMediaItem(mediaItem: GenericMediaItem) {
        queue.clear()
        queue.add(mediaItem)
        currentIndex = 0
        loadCurrentItem()
    }

    private fun loadCurrentItem() {
        val uri = currentMediaItem?.uri
        if (uri != null) {
            val url = platform.Foundation.NSURL.URLWithString(uri)
            if (url != null) {
                val item = platform.AVFoundation.AVPlayerItem(uRL = url)
                player.replaceCurrentItemWithPlayerItem(item)
            }
        }
    }

    override fun addMediaItem(mediaItem: GenericMediaItem) {
        queue.add(mediaItem)
    }

    override fun addMediaItem(index: Int, mediaItem: GenericMediaItem) {
        queue.add(index, mediaItem)
    }

    override fun removeMediaItem(index: Int) {
        if (index in queue.indices) {
            queue.removeAt(index)
        }
    }

    override fun moveMediaItem(fromIndex: Int, toIndex: Int) {
        if (fromIndex in queue.indices && toIndex in queue.indices) {
            val item = queue.removeAt(fromIndex)
            queue.add(toIndex, item)
        }
    }

    override fun clearMediaItems() {
        queue.clear()
        currentIndex = 0
    }

    override fun replaceMediaItem(index: Int, mediaItem: GenericMediaItem) {
        if (index in queue.indices) {
            queue[index] = mediaItem
        }
    }

    override fun getMediaItemAt(index: Int): GenericMediaItem? = queue.getOrNull(index)

    override fun getCurrentMediaTimeLine(): List<GenericMediaItem> = queue

    override fun getUnshuffledIndex(shuffledIndex: Int): Int = shuffledIndex

    override val isPlaying: Boolean
        get() = player.rate != 0f
    override val currentPosition: Long
        get() {
            val time = player.currentTime()
            val seconds = platform.CoreMedia.CMTimeGetSeconds(time)
            return if (seconds.isNaN()) 0L else (seconds * 1000).toLong()
        }
    override val duration: Long
        get() {
            val item = player.currentItem
            if (item != null) {
                val time = item.duration
                val seconds = platform.CoreMedia.CMTimeGetSeconds(time)
                return if (seconds.isNaN()) 0L else (seconds * 1000).toLong()
            }
            return 0L
        }
    override val bufferedPosition: Long = 0L
    override val bufferedPercentage: Int = 0
    override val currentMediaItem: GenericMediaItem?
        get() = queue.getOrNull(currentIndex)
    override val currentMediaItemIndex: Int
        get() = currentIndex
    override val mediaItemCount: Int
        get() = queue.size
    override val contentPosition: Long = 0L
    override val playbackState: Int = 0

    override fun hasNextMediaItem(): Boolean = currentIndex < queue.size - 1

    override fun hasPreviousMediaItem(): Boolean = currentIndex > 0

    override var shuffleModeEnabled: Boolean = false
    override var repeatMode: Int = 0
    override var playWhenReady: Boolean = true
    override var playbackParameters: GenericPlaybackParameters = GenericPlaybackParameters(1f, 1f)
    override val audioSessionId: Int = 0
    override var volume: Float
        get() = player.volume
        set(value) { player.volume = value }
    override var sleepFadeFactor: Float = 1f
    override var albumTrackIds: Set<String> = emptySet()
    override var skipSilenceEnabled: Boolean = false

    override fun setEqualizer(bandsDb: List<Float>, preampDb: Float) {}

    override fun addListener(listener: MediaPlayerListener) {
        listeners.add(listener)
    }

    override fun removeListener(listener: MediaPlayerListener) {
        listeners.remove(listener)
    }

    override fun release() {
        player.pause()
    }
}
