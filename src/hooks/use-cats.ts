import { CatContextType } from "@/app/types";
import { createContext, useContext } from "react";
import { useSessionStorage } from "usehooks-ts";

const CatContext = createContext<CatContextType | null>(null);

function useCatSetup(count: number): CatContextType {
    const initialArr = new Array(count).fill(false)
    const [foundCats, setFoundCats] = useSessionStorage<boolean[]>("found-cats", initialArr);

    const isCatFound = (n: number) => {
        console.log("isCatFound");
        if (n < 0 || n >= foundCats.length) {
            return false;
        }
        return foundCats[n];
    }

    const findCat = (n: number) => {
        console.log("findCat");
        if (n < 0 || n >= foundCats.length) {
            console.log(`Cat ${n} does not exist`);
        } else {
            const newFoundCats = [...foundCats]
            newFoundCats[n] = true;
            setFoundCats(newFoundCats);
        }
    }

    const catsRemaining = () => {
        console.log("catsRemaining");
        return foundCats.filter(cat => !cat).length
    }

    return {
        isCatFound,
        findCat,
        catsRemaining
    }
}

function useCats() {
    return useContext(CatContext);
}

export { useCatSetup, useCats, CatContext }