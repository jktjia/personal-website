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
      <ScrollAppearDiv className="bg-primary p-6 text-foreground flex-col">
        {children}
      </ScrollAppearDiv>
    </div>
  );
}
