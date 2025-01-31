interface CatContextType {
    isCatFound: (n: number) => boolean;
    findCat: (n: number) => void;
    catsRemaining: () => number;
}

export type {
    CatContextType
}