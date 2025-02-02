import "@/lib/globals.css";
import { useCats } from "@/hooks/use-cats";
import { Cat } from "lucide-react";
import { useAlerts } from "@/hooks/use-alerts";
import { AlertSeverity } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function HiddenCat({
  n,
  color,
  className,
  visible,
}: {
  n: number;
  color?: string;
  className?: string;
  visible?: boolean;
}) {
  const { catsRemaining, isCatFound, findCat } = useCats();
  const classNameBase =
    `[color:${color || "foreground"}] ` +
    (isCatFound(n) || visible ? "opacity-100 " : "opacity-0 hover:opacity-50 ");

  const { addAlert } = useAlerts();

  const clickCatAndAlert = () => {
    if (!isCatFound(n)) {
      findCat(n);
      const newRemaining = catsRemaining() - 1;
      if (newRemaining) {
        addAlert({
          severity: AlertSeverity.INFO,
          message: `You found a cat! ${newRemaining} ${newRemaining == 1 ? "cat" : "cats"} remaining.`,
          timeout: 2,
        });
      } else {
        addAlert({
          severity: AlertSeverity.INFO,
          message: "You found all of the cats!",
          timeout: 2,
        });
      }
    }
  };

  return (
    <Cat className={cn(classNameBase + className)} onClick={clickCatAndAlert} />
  );
}
