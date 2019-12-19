interface SoundSource {
  Q: string;
  W: string;
  E: string;
  A: string;
  S: string;
  D: string;
  Z: string;
  X: string;
  C: string;
  [key: string]: string;
}

interface Sounds {
  Q: HTMLAudioElement;
  W: HTMLAudioElement;
  E: HTMLAudioElement;
  A: HTMLAudioElement;
  S: HTMLAudioElement;
  D: HTMLAudioElement;
  Z: HTMLAudioElement;
  X: HTMLAudioElement;
  C: HTMLAudioElement;
}

class SoundManager {
  private sounds: Map<string, HTMLAudioElement>;

  constructor(src: SoundSource) {
    this.sounds = new Map();
    for (const key in src) this.sounds.set(key, new Audio(src[key]));
  }

  play(id: string) {
    const sound = this.sounds.get(id);
    if (sound) sound.play();
  }

  setSource(src: SoundSource) {
    for (const key in src) this.sounds.get(key)!.src = src[key];
  }
}

export default SoundManager;
