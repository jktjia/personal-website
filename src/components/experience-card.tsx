import "@/lib/globals.css";
import { ReactNode } from "react";
import ScrollAppearDiv from "./scroll-appear-div";
import { cn } from "@/lib/utils";

export default function ExperienceCard({
  children,
  className,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div>
      <ScrollAppearDiv
        className={cn(
          "bg-tertiary p-10 rounded-lg text-primary flex-col font-serif",
          className,
        )}
      >
        {children}
      </ScrollAppearDiv>
    </div>
  );
}

function ExperienceHeader({ children }: { children: ReactNode }) {
  return <div className="text-2xl font-extrabold">{children}</div>;
}

function ExperienceSubheader({ children }: { children: ReactNode }) {
  return (
    <div className="text-xl font-semibold opacity-75 italic">{children}</div>
  );
}

function ExperienceDescription({ children }: { children: ReactNode }) {
  return <div className="py-4 self-center text-lg text-left">{children}</div>;
}

function ExperienceTags({
  tags,
  children,
}: {
  tags: string[];
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-row flex-wrap gap-2 items-center">
      {tags.map((name, idx) => (
        <div
          key={idx}
          className="py-2 px-3 bg-secondary text-white rounded-2xl text-sm"
        >
          {name}
        </div>
      ))}
      {children}
    </div>
  );
}

export {
  ExperienceHeader,
  ExperienceSubheader,
  ExperienceDescription,
  ExperienceTags,
};
