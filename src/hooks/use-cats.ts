import { CatContextType } from "@/app/types";
import { createContext, useContext } from "react";
import { useSessionStorage } from "usehooks-ts";

const CatContext = createContext<CatContextType | null>(null);

function useCatSetup(count: number): CatContextType {
  const falseArr = new Array(count).fill(false);
  const [foundCats, setFoundCats] = useSessionStorage<boolean[]>(
    "found-cats",
    falseArr,
  );

  const isCatFound = (n: number) => {
    console.log(`isCatFound: ${foundCats[n]}`);
    if (n < 0 || n >= foundCats.length) {
      return false;
    }
    return foundCats[n];
  };

  const findCat = (n: number) => {
    console.log(`findCat: ${n}`);
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
    console.log("catsRemaining");
    return foundCats.filter((cat) => !cat).length;
  };

  const reset = () => {
    setFoundCats(falseArr);
  };

  return {
    isCatFound,
    findCat,
    catsRemaining,
    reset,
  };
}

function useCats() {
  return useContext(CatContext);
}

export { useCatSetup, useCats, CatContext };
