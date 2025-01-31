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
  const classNameBase =
    `[color:${color || "foreground"}] ` +
    (context?.isCatFound(n) ? "opacity-100 " : "opacity-0 hover:opacity-50 ");
  return (
    <Cat
      className={classNameBase + className}
      onClick={() => {
        console.log(`clicked cat ${n}!`);
        context?.findCat(n);
      }}
    />
  );
}
