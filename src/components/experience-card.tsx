import "@/lib/globals.css";
import { ReactNode } from "react";

export default function ExperienceCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={"bg-secondary h-28 p-4 rounded-md text-black" + className}>
      {children}
    </div>
  );
}

function ExperienceCompany({ children }: { children: ReactNode }) {
  return <div className="text-xl font-extrabold">{children}</div>;
}

function ExperiencePosition({ children }: { children: ReactNode }) {
  return (
    <div className="text-lg font-semibold opacity-75 italic">{children}</div>
  );
}

export { ExperienceCompany, ExperiencePosition };
