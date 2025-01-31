import "@/app/globals.css";
import PageBase from "@/components/page-base";
import { useCats } from "@/hooks/use-cats";

export default function Cats() {
  const context = useCats();

  return (
    <PageBase>
      {context?.catsRemaining() ? (
        <div>{`There are still ${context?.catsRemaining()} cats for you to find`}</div>
      ) : (
        <>
          <div>You found all of the cats!!</div>
          <button
            onClick={context?.reset}
            className="bg-foreground text-background p-3 rounded-md"
          >
            Reset cats
          </button>
        </>
      )}
    </PageBase>
  );
}
