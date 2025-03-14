import "@/lib/globals.css";
import { useCats } from "@/hooks/use-cats";
import { NavLink } from "react-router";
import { ArrowRight } from "lucide-react";
import CatsRemainingPage from "./cats-remaining";
import FirstTimeCatsPage from "./first-time-cats";

function CatPage() {
  const { reset } = useCats();
  return (
    <>
      <div className="text-5xl pt-10">Kai's Page of Nonsense</div>
      <div>More coming soon!</div>
      <div className="flex items-center gap-2">
        Done with the nonsense? Click this
        <ArrowRight className="h-4 w-4" />
        <NavLink
          to="/"
          onClick={reset}
          className="bg-tertiary text-background p-2 rounded-md"
        >
          Reset cats
        </NavLink>
      </div>
    </>
  );
}

export default function Cats() {
  const { catsRemaining, hasSeenCatPage } = useCats();

  if (catsRemaining) {
    return <CatsRemainingPage />;
  } else if (!hasSeenCatPage) {
    return <FirstTimeCatsPage />;
  } else {
    return <CatPage />;
  }
}
