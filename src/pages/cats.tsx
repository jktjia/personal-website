import { useCats } from "@/hooks/use-cats";

export default function Cats() {
  const context = useCats();

  return (
    <>
      {context?.catsRemaining() === 0 ? (
        <div></div>
      ) : (
        <div>{`There are still ${context?.catsRemaining()} cats for you to find`}</div>
      )}
    </>
  );
}
