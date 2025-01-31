import "@/app/globals.css";
import { useCats } from "@/hooks/use-cats";
import { Cat } from "lucide-react";

export default function HiddenCat({
  n,
  color,
  className,
}: {
  n: number;
  color?: string;
  className?: string;
}) {
  const context = useCats();

  return (
    <Cat
      className={
        (!context?.isCatFound(n) && "opacity-0 hover:opacity-50") +
        ` [color:${color || "foreground"}] ` +
        className
      }
      onClick={() => context?.findCat(n)}
    />
  );
}
