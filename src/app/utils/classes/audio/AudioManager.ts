import Indexable from "../../interfaces/Indexable";
import AudioURL from "./AudioURL";

class AudioManager {
  private soundURLs: Map<string, AudioURL>;

  constructor(soundURLs: Indexable) {
    this.soundURLs = new Map();
    for (const key in soundURLs) this.soundURLs.set(key, soundURLs[key]);
  }

  getAudioName(id: string): string {
    const soundURL = this.soundURLs.get(id);
    return soundURL ? soundURL.name : "";
  }

  playAudio(id: string) {
    const soundURL = this.soundURLs.get(id);
    if (!soundURL) return;
    const sound = new Audio(soundURL.path);
    sound.play();
  }

  setAudioURLs(soundURLs: Indexable) {
    this.soundURLs.clear();
    for (const key in soundURLs) this.soundURLs.set(key, soundURLs[key]);
  }
}

export default AudioManager;
