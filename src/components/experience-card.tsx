import "@/lib/globals.css";
import { ReactNode } from "react";

export function ExperienceHeader({ children }: { children: ReactNode }) {
  return <div className="text-2xl font-extrabold">{children}</div>;
}

export function ExperienceSubheader({ children }: { children: ReactNode }) {
  return (
    <div className="text-xl font-semibold opacity-75 italic">{children}</div>
  );
}

export function ExperienceDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={"py-4 self-center text-lg text-left " + className}>
      {children}
    </div>
  );
}

export function ExperienceImage({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      className={"h-full object-cover rounded-lg overflow-hidden" + className}
      style={{ aspectRatio: "400/300" }}
    />
  );
}

export function ExperienceTags({
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
