export interface Game {
  id: number;
  title: string;
  description: string;
  genre: string;
  generation: number;
  price: number;
  covers: Covers;
  consoleName: ConsoleName;
}

export interface ConsoleName {
  short: Short;
  public: Public;
}

export enum Public {
  PlayStation1 = "PlayStation 1",
  PlayStation3 = "PlayStation 3",
}

export enum Short {
  Ps1 = "ps1",
  Ps3 = "ps3",
}

export interface Covers {
  webp: string;
  jpg: string;
}

