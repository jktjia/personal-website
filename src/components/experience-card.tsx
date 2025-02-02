import "@/lib/globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function ExperienceCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-tertiary p-10 rounded-md text-primary flex-col font-serif" +
          className,
      )}
    >
      {children}
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
    <div className="flex flex-row flex-wrap gap-2">
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
