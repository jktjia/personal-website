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
        "bg-tertiary p-10 rounded-md text-primary flex-col m-4 font-serif" +
          className,
      )}
    >
      {children}
    </div>
  );
}

function ExperienceCompany({ children }: { children: ReactNode }) {
  return <div className="text-2xl font-extrabold">{children}</div>;
}

function ExperiencePosition({ children }: { children: ReactNode }) {
  return (
    <div className="text-xl font-semibold opacity-75 italic">{children}</div>
  );
}

function ExperienceContent({ children }: { children: ReactNode }) {
  return (
    <div className="pl-4 pt-4 max-w-xl self-center text-lg text-left">
      {children}
    </div>
  );
}

export { ExperienceCompany, ExperiencePosition, ExperienceContent };
