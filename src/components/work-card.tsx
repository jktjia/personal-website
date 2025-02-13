import { ReactNode } from "react";
import ScrollAppearDiv from "./scroll-appear-div";

export default function WorkCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <ScrollAppearDiv className="bg-tertiary p-10 rounded-lg text-primary flex-col font-serif">
        {children}
      </ScrollAppearDiv>
    </div>
  );
}
