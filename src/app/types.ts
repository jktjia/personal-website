interface CatContextType {
  isCatFound: (n: number) => boolean;
  findCat: (n: number) => void;
  catsRemaining: () => number;
  reset: () => void;
}

export type { CatContextType };
