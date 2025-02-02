import "@/lib/globals.css";
import { useCats } from "@/hooks/use-cats";
import { NavLink } from "react-router";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Cat } from "lucide-react";
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
    <div>
      There {oneCatRemaining ? "is" : "are"} still {catsRemaining()}{" "}
      {oneCatRemaining ? "cat" : "cats"} for you to find
    </div>
  );
}

function FirstTimeCats() {
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

export default function Cats() {
  const { catsRemaining, hasSeenCatPage, reset } = useCats();

  if (catsRemaining()) {
    return <CatsRemainingPage />;
  } else if (!hasSeenCatPage) {
    return <FirstTimeCats />;
  } else {
    return (
      <>
        <div className="text-5xl pt-10">Kai's Page of Nonsense</div>
        <NavLink to="/" className="m-2">
          <button
            onClick={reset}
            className="bg-tertiary text-background p-2 rounded-md"
          >
            Reset cats
          </button>
        </NavLink>
      </>
    );
  }
}
