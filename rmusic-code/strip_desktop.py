import re

def remove_desktop_code():
    filepath = r"core\data\src\iosMain\kotlin\com\maxrave\data\mediaservice\IosMediaPlayerHandlerImpl.kt"
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove specific imports
    content = re.sub(r'import com\.maxrave\.data\.mediaservice\.mac\..*\n', '', content)
    content = re.sub(r'import org\.simpmusic\.nowplayingcenter\..*\n', '', content)
    content = re.sub(r'import com\.my\.kizzy\.DiscordRPC\n', '', content)
    
    # Remove nypc, macOSMediaIntegration, discordRPC properties
    content = re.sub(r'private val nypc[\s\S]*?(?=\n    // macOS)', '', content)
    content = re.sub(r'private val macOSMediaIntegration[\s\S]*?(?=\n    private fun getPlatform)', '', content)
    content = re.sub(r'@Volatile\s+private var discordRPC: DiscordRPC\? = null', '', content)
    
    # Remove getPlatform
    content = re.sub(r'private fun getPlatform\(\): Platform \{[\s\S]*?(?=\n    override val player)', '', content)
    
    # Remove initializeMacOSMediaIntegration and updateMacOSNowPlayingInfo
    content = re.sub(r'private fun initializeMacOSMediaIntegration\(\) \{[\s\S]*?(?=\n    private fun updateMacOSNowPlayingInfo)', '', content)
    content = re.sub(r'private fun updateMacOSNowPlayingInfo[\s\S]*?(?=\n    private fun updatePlaybackState)', '', content)
    content = re.sub(r'private fun updatePlaybackState[\s\S]*?(?=\n    private fun updateCommandsEnabled)', '', content)
    content = re.sub(r'private fun updateCommandsEnabled[\s\S]*?(?=\n    private fun updateElapsedTime)', '', content)
    content = re.sub(r'private fun updateElapsedTime[\s\S]*?(?=\n    private fun clearMacOSNowPlayingInfo)', '', content)
    content = re.sub(r'private fun clearMacOSNowPlayingInfo[\s\S]*?(?=\n\})', '', content)

    # Remove all calls to them
    content = re.sub(r'nypc\?\.setListener\([\s\S]*?\n        \)', '', content)
    content = re.sub(r'initializeMacOSMediaIntegration\(\)', '', content)
    content = re.sub(r'updateMacOSNowPlayingInfo\(song\)', '', content)
    content = re.sub(r'updateDiscordRpc\(song\)', '', content)
    content = re.sub(r'nowPlayingState\.value\.songEntity\?\.let \{ updateDiscordRpc\(it\) \}', '', content)
    content = re.sub(r'macOSMediaIntegration\?\.release\(\)', '', content)
    content = re.sub(r'if \(discordRPC\?\.isRpcRunning\(\) == true\) \{\s*discordRPC\?\.closeRPC\(\)\s*\}', '', content)
    content = re.sub(r'discordRPC = null', '', content)
    content = re.sub(r'nypc\?\.setNowPlaying\([\s\S]*?\n\s*\)', '', content)

    # Remove the whole discordRPCEnabledJob block
    content = re.sub(r'val discordRPCEnabledJob =[\s\S]*?discordRPCEnabledJob\.join\(\)', '', content)
    
    # Remove updateDiscordRpc function entirely
    content = re.sub(r'private fun updateDiscordRpc\(song: SongEntity\) \{[\s\S]*?(?=\n    override fun removeMediaItem)', '', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    remove_desktop_code()
