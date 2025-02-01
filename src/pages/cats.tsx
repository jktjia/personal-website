import "@/lib/globals.css";
import { useCats } from "@/hooks/use-cats";

export default function Cats() {
  const context = useCats();
  const isOneCatRemaining = context && context.catsRemaining() === 1;

  return (
    <>
      {context?.catsRemaining() ? (
        <div>{`There ${isOneCatRemaining ? "is" : "are"} still ${context?.catsRemaining()} ${isOneCatRemaining ? "cat" : "cats"} for you to find`}</div>
      ) : (
        <>
          <div>You found all of the cats!!</div>
          <button
            onClick={context?.reset}
            className="bg-tertiary text-background p-2 rounded-md"
          >
            Reset cats
          </button>
        </>
      )}
    </>
  );
}
