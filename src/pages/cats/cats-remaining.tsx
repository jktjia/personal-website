import { useCats } from "@/hooks/use-cats";

export default function CatsRemainingPage() {
  const { catsRemaining } = useCats();
  const oneCatRemaining: boolean = catsRemaining === 1;

  return (
    <div className="flex-grow grid">
      <p className="row-start-2">
        There {oneCatRemaining ? "is" : "are"} still {catsRemaining}{" "}
        {oneCatRemaining ? "cat" : "cats"} for you to find
      </p>
    </div>
  );
}
