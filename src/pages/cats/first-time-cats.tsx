import ScrollAppearDiv from "@/components/scroll-appear-div";
import { useCats } from "@/hooks/use-cats";
import { cn } from "@/lib/utils";
import { Cat } from "lucide-react";
import { ReactNode } from "react";

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

export default function FirstTimeCatsPage() {
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
