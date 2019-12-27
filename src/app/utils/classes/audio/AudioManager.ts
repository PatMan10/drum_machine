import Indexable from "../../interfaces/Indexable";
import AudioURL from "./AudioURL";

class AudioManager {
  private soundURLs: Map<string, AudioURL>;
  private volume: number;

  constructor(soundURLs: Indexable, volume: number = 0.5) {
    this.soundURLs = new Map();
    for (const key in soundURLs) this.soundURLs.set(key, soundURLs[key]);
    this.volume = volume;
  }

  getAudioName(id: string): string {
    const soundURL = this.soundURLs.get(id);
    return soundURL ? soundURL.name : "";
  }

  setVolume(v: number) {
    this.volume = v / 100;
  }

  playAudio(id: string) {
    const soundURL = this.soundURLs.get(id);
    if (!soundURL) return;
    const sound = new Audio(soundURL.path);
    sound.volume = this.volume;
    sound.play();
  }

  setAudioURLs(soundURLs: Indexable) {
    this.soundURLs.clear();
    for (const key in soundURLs) this.soundURLs.set(key, soundURLs[key]);
  }
}

export default AudioManager;
