import "@/lib/globals.css";
import { useCats } from "@/hooks/use-cats";
import { NavLink } from "react-router";

export default function Cats() {
  const context = useCats();
  const isOneCatRemaining = context && context.catsRemaining() === 1;

  return (
    <>
      {context?.catsRemaining() ? (
        <div>{`There ${isOneCatRemaining ? "is" : "are"} still ${context?.catsRemaining()} ${isOneCatRemaining ? "cat" : "cats"} for you to find`}</div>
      ) : (
        <>
          <div className="pt-10">You found all of the cats!!</div>
          <div>Now what?</div>
          <NavLink to="/">
            <button
              onClick={context?.reset}
              className="bg-tertiary text-background p-2 rounded-md"
            >
              Reset cats
            </button>
          </NavLink>
        </>
      )}
    </>
  );
}
