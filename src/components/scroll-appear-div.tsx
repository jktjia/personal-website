import useIsVisible from "@/hooks/use-is-visible";
import { cn } from "@/lib/utils";
import { ReactNode, useRef } from "react";

export default function ScrollAppearDiv({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  return (
    <div
      ref={ref}
      className={cn(
        `transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
