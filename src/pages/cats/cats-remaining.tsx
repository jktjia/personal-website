import ScrollAppearDiv from "@/components/scroll-appear-div";
import { useCats } from "@/hooks/use-cats";
import { Cat } from "lucide-react";
import cats from "@/assets/cats.png";

export default function CatsRemainingPage() {
  const { catsRemaining } = useCats();
  const oneCatRemaining: boolean = catsRemaining === 1;

  return (
    <>
      <div className="w-full grid">
        <div className="col-start-2 flex flex-col gap-12 py-12 text-start w-fit">
          <ScrollAppearDiv>I have two cats.</ScrollAppearDiv>
          <ScrollAppearDiv className="max-w-sm">
            <img
              src={cats}
              alt="Photo of my cats"
              className="w-full h-full object-cover rounded-lg overflow-hidden"
              style={{ aspectRatio: "400/500" }}
            />
          </ScrollAppearDiv>
          <ScrollAppearDiv>
            Also, there are cats hidden throughout this site.
          </ScrollAppearDiv>
          <ScrollAppearDiv className="flex flex-row items-center gap-3">
            They look like this:
            <Cat />
          </ScrollAppearDiv>
          <ScrollAppearDiv>Go forth.</ScrollAppearDiv>
          <ScrollAppearDiv>Find them.</ScrollAppearDiv>
          <ScrollAppearDiv>I believe in you.</ScrollAppearDiv>
        </div>
      </div>
      <ScrollAppearDiv className="text-5xl p-5 pb-20">
        There {oneCatRemaining ? "is" : "are"} still {catsRemaining}{" "}
        {oneCatRemaining ? "cat" : "cats"} for you to find.
      </ScrollAppearDiv>
    </>
  );
}
