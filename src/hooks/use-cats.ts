import { CatContextType } from "@/lib/types";
import { createContext, useContext } from "react";
import { useSessionStorage } from "usehooks-ts";

const CatContext = createContext<CatContextType>({
  isCatFound: (n: number) => {
    console.log(`isCatFound: ${n}`);
    return false;
  },
  findCat: (n: number) => console.log(`findCat: ${n}`),
  catsRemaining: () => {
    console.log(`catsRemaining: ${-1}`);
    return -1;
  },
  reset: () => console.log("reset"),
  catPageSeen: () => {
    console.log(`catPageSeen: ${false}`);
    return false;
  },
  setCatPageSeen: (seen: boolean) => console.log(`setCatPageSeen: ${seen}`),
});

function useCatSetup(count: number): CatContextType {
  const [catPageSeen, setCatPageSeen] = useSessionStorage<boolean>(
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
      console.log(newFoundCats);
      setFoundCats(newFoundCats);
    }
  };

  const catsRemaining = () => {
    const remaining = foundCats.filter((cat) => !cat).length;
    console.log(`catsRemaining: ${remaining}`);
    return remaining;
  };

  const reset = () => {
    setFoundCats(falseArr);
  };

  return {
    isCatFound,
    findCat,
    catsRemaining,
    reset,
    catPageSeen: () => catPageSeen,
    setCatPageSeen,
  };
}

function useCats() {
  return useContext(CatContext);
}

export { useCatSetup, useCats, CatContext };
