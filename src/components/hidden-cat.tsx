import "@/lib/globals.css";
import { useCats } from "@/hooks/use-cats";
import { Cat } from "lucide-react";
import { useAlerts } from "@/hooks/use-alerts";
import { AlertSeverity } from "@/lib/types";

export default function HiddenCat({
  n,
  color,
  className,
}: {
  n: number;
  color?: string;
  className?: string;
}) {
  const { catsRemaining, isCatFound, findCat } = useCats();
  const classNameBase =
    `[color:${color || "foreground"}] ` +
    (isCatFound(n) ? "opacity-100 " : "opacity-0 hover:opacity-50 ");

  const { addAlert } = useAlerts();

  const clickCatAndAlert = () => {
    findCat(n);
    const newRemaining = catsRemaining() - 1;
    if (newRemaining) {
      addAlert({
        severity: AlertSeverity.INFO,
        message: `You found a cat! ${newRemaining} ${newRemaining == 1 ? "cat" : "cats"} remaining.`,
        timeout: 5,
      });
    } else {
      addAlert({
        severity: AlertSeverity.INFO,
        message: "You found all of the cats!",
        timeout: 5,
      });
    }
  };

  return (
    <Cat className={classNameBase + className} onClick={clickCatAndAlert} />
  );
}
