import "@/lib/globals.css";
import { useCats } from "@/hooks/use-cats";
import { NavLink } from "react-router";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Cat } from "lucide-react";
import ScrollAppearDiv from "@/components/scroll-appear-div";

function CatBorder({ rows }: { rows: number }) {
  const cats = [];
  for (let n = 0; n < rows; n++) {
    cats.push(<Cat className="w-32 h-32 m-4" />);
  }
  return <div className="flex flex-col">{cats}</div>;
}

function CatBorderedElement({
  rows,
  className,
  children,
}: {
  rows: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className="h-fit flex flex-row items-center text-center">
      <CatBorder rows={rows} />
      <ScrollAppearDiv className={cn("flex-grow text-6xl", className)}>
        {children}
      </ScrollAppearDiv>
      <CatBorder rows={rows} />
    </div>
  );
}

function CatsRemainingPage() {
  const { catsRemaining } = useCats();
  const oneCatRemaining: boolean = catsRemaining() === 1;

  return (
    <div className="flex-grow grid">
      <p className="row-start-2">
        There {oneCatRemaining ? "is" : "are"} still {catsRemaining()}{" "}
        {oneCatRemaining ? "cat" : "cats"} for you to find
      </p>
    </div>
  );
}

function FirstTimeCatsPage() {
  const { setCatPageSeen } = useCats();
  return (
    <div className="flex flex-col">
      <CatBorderedElement rows={2} />
      <CatBorderedElement rows={1}>
        You went through all of the pages
      </CatBorderedElement>
      <CatBorderedElement rows={2} />
      <CatBorderedElement rows={1}>
        And you found all of the cats!
      </CatBorderedElement>
      <CatBorderedElement rows={2} />
      <CatBorderedElement rows={2}>Now what?</CatBorderedElement>
      <CatBorderedElement rows={2} />
      <CatBorderedElement rows={1}>
        Allow me to welcome you to...
      </CatBorderedElement>
      <CatBorderedElement rows={2} />
      <CatBorderedElement rows={3}>
        <div className="text-9xl">Kai's Page of Nonsense</div>
        <button
          className="text-lg bg-tertiary p-4 rounded-md hover:opacity-80"
          onClick={setCatPageSeen}
        >
          Let's see some nonsense!
        </button>
      </CatBorderedElement>
      <CatBorderedElement rows={1} />
    </div>
  );
}

function CatPage() {
  const { reset } = useCats();
  return (
    <>
      <div className="text-5xl pt-10">Kai's Page of Nonsense</div>
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

  if (catsRemaining()) {
    return <CatsRemainingPage />;
  } else if (!hasSeenCatPage) {
    return <FirstTimeCatsPage />;
  } else {
    return <CatPage />;
  }
}
