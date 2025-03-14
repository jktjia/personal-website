import { CatContextType } from "@/lib/types";
import { createContext, useContext } from "react";
import { useSessionStorage } from "usehooks-ts";

const CatContext = createContext<CatContextType>({
  isCatFound: (n: number) => {
    console.log(`isCatFound: ${n}`);
    return false;
  },
  findCat: (n: number) => console.log(`findCat: ${n}`),
  catsRemaining: -1,
  reset: () => console.log("reset"),
  hasSeenCatPage: false,
  setCatPageSeen: () => console.log(`setCatPageSeen`),
});

function useCatSetup(count: number): CatContextType {
  const [hasSeenCatPage, setCatPageSeen] = useSessionStorage<boolean>(
    "cat-page-seen",
    false,
  );
  const falseArr = new Array(count).fill(false);
  const [foundCats, setFoundCats] = useSessionStorage<boolean[]>(
    "found-cats",
    falseArr,
  );

  const isCatFound = (n: number) => {
    if (n < 0 || n >= foundCats.length) {
      return false;
    }
    return foundCats[n];
  };

  const findCat = (n: number) => {
    if (n < 0 || n >= foundCats.length) {
      console.log(`Cat ${n} does not exist`);
    } else {
      const newFoundCats = [...foundCats];
      newFoundCats[n] = true;
      setFoundCats(newFoundCats);
    }
  };

  const countCatsRemaining = () => {
    return foundCats.filter((cat) => !cat).length;
  };

  const reset = () => {
    setFoundCats(falseArr);
  };

  return {
    isCatFound,
    findCat,
    catsRemaining: countCatsRemaining(),
    reset,
    hasSeenCatPage,
    setCatPageSeen: () => setCatPageSeen(true),
  };
}

function useCats() {
  return useContext(CatContext);
}

export { useCatSetup, useCats, CatContext };
