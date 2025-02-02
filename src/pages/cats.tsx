import "@/lib/globals.css";
import { useCats } from "@/hooks/use-cats";
import { NavLink } from "react-router";

import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Cat } from "lucide-react";

export function useIsVisible(ref: RefObject<Element | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);

  return isIntersecting;
}

function ScrollAppearDiv({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  return (
    <div ref={ref} className="h-screen flex flex-row items-center text-center">
      <div className="grid grid-cols-1 h-full mx-4">
        <Cat className="w-32 h-32" />
        <Cat className="w-32 h-32" />
        <Cat className="w-32 h-32" />
        <Cat className="w-32 h-32" />
        <Cat className="w-32 h-32" />
      </div>
      <div
        className={cn(
          `flex-grow transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"} text-6xl`,
          className,
        )}
      >
        {children}
      </div>
      <div className="grid grid-cols-1 h-full mx-4">
        <Cat className="w-32 h-32" />
        <Cat className="w-32 h-32" />
        <Cat className="w-32 h-32" />
        <Cat className="w-32 h-32" />
        <Cat className="w-32 h-32" />
      </div>
    </div>
  );
}

function CatsRemainingPage() {
  const context = useCats();
  const isOneCatRemaining = context && context.catsRemaining() === 1;

  return (
    <div>
      There {isOneCatRemaining ? "is" : "are"} still {context?.catsRemaining()}{" "}
      {isOneCatRemaining ? "cat" : "cats"} for you to find
    </div>
  );
}

export default function Cats() {
  const context = useCats();

  return (
    <>
      {context?.catsRemaining() ? (
        <CatsRemainingPage />
      ) : (
        <div className="flex flex-col">
          <ScrollAppearDiv>You found all of the cats!</ScrollAppearDiv>
          <ScrollAppearDiv>You went through all of the pages </ScrollAppearDiv>
          <ScrollAppearDiv>Now what?</ScrollAppearDiv>
          <ScrollAppearDiv>Allow me to welcome you to...</ScrollAppearDiv>
          <ScrollAppearDiv className="text-9xl">
            Kai's Page of Nonsense
          </ScrollAppearDiv>
          <NavLink to="/" className="m-2">
            <button
              onClick={context?.reset}
              className="bg-tertiary text-background p-2 rounded-md"
            >
              Reset cats
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
}
