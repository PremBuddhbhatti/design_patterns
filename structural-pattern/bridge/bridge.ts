/**
 * The Bridge pattern is a structural design pattern that lets you split a large class or a set of closely related classes into two separate
 * hierarchies—abstraction and implementation—which can be developed independently of each other.
 */

interface MediaPlayerImplementation {
  playAudio(): void;
  playVideo(): void;
}

class WindowsMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing audio on windows media player");
  }

  public playVideo(): void {
    console.log("Playing video on windows media player");
  }
}

class MacOsMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing audio on MacOS media player");
  }

  public playVideo(): void {
    console.log("Playing video on MacOS media player");
  }
}

// The Abstraction provides high-level control logic.
// It relies on the implementation object to do the actual low-level work.
abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}

  abstract playFile(): void;
}

// You can extend the Abstraction without changing the Implementation classes.
class AudioPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playAudio();
  }
}

class VideoPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playVideo();
  }
}

// Client Code
let windowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer());
windowsAudioPlayer.playFile();

let macOSVideoPlayer = new VideoPlayer(new MacOsMediaPlayer());
macOSVideoPlayer.playFile();


/**
 * when to use
 * 
 *  1. When you want to hide implementation details from the client
 *  2. When you want to have implementation-specific behavior
 *  3. When you want to switch implementations at runtime
 *  4. When your code structure is static, but the behavior needs to be dynamic
 *  5. When you want to prevent monolithic designs
 */