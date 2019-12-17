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
  private sounds: Sounds;

  constructor(src: SoundSource) {
    this.sounds = {
      Q: new Audio(src.Q),
      W: new Audio(src.W),
      E: new Audio(src.E),

      A: new Audio(src.A),
      S: new Audio(src.S),
      D: new Audio(src.D),

      Z: new Audio(src.Z),
      X: new Audio(src.X),
      C: new Audio(src.C)
    };
  }

  play(id: string) {
    if (id === "Q") this.sounds.Q.play();
    if (id === "W") this.sounds.W.play();
    if (id === "E") this.sounds.E.play();

    if (id === "A") this.sounds.A.play();
    if (id === "S") this.sounds.S.play();
    if (id === "D") this.sounds.D.play();

    if (id === "Z") this.sounds.Z.play();
    if (id === "X") this.sounds.X.play();
    if (id === "C") this.sounds.C.play();
  }

  setSource(src: SoundSource) {
    this.sounds.Q.src = src.Q;
    this.sounds.W.src = src.W;
    this.sounds.E.src = src.E;

    this.sounds.A.src = src.A;
    this.sounds.S.src = src.S;
    this.sounds.D.src = src.D;

    this.sounds.Z.src = src.Z;
    this.sounds.X.src = src.X;
    this.sounds.C.src = src.C;
  }
}

export default SoundManager;
