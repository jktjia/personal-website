import { ReactNode, useMemo, useState } from "react";
import HiddenCat from "./cats/hidden-cat";
import {
  ExperienceHeader,
  ExperienceImage,
  ExperienceSubheader,
} from "./experience-card";
import { Link } from "react-router";
import { ProjectType } from "@/lib/types";
import { cn, responsiveMargins } from "@/lib/utils";

function ExpandableCard({
  index,
  name,
  selected,
  onClick,
  children,
}: {
  index: number;
  name: string;
  selected: number;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: ReactNode;
}) {
  return (
    <div className="bg-primary items-center justify-center flex flex-col">
      {selected === index ? (
        <div className={responsiveMargins}>{children}</div>
      ) : (
        <>
          <button
            className={cn(
              responsiveMargins,
              "flex-grow text-start hover:opacity-50 h-20",
            )}
            style={{ writingMode: "vertical-lr" }}
            onClick={onClick}
          >
            {name}
          </button>
          <HiddenCat
            n={13 + 2 * index}
            className={cn(responsiveMargins, "bottom-0 relative")}
          />
        </>
      )}
    </div>
  );
}

export function ProjectCard({
  href,
  children,
  className,
}: {
  href: string;
  imageSrc: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={"flex-col p-10 " + className}>
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to={href}
          target="_blank"
          className="h-[50vh] flex justify-center hover:opacity-75 transition-opacity ease-in"
        ></Link>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

export default function ProjectCards({
  projects,
  className,
}: {
  projects: ProjectType[];
  className?: string;
}) {
  const [selected, setSelected] = useState(0);

  const current = useMemo(() => projects[selected], [selected]);

  return (
    <div
      className={cn("flex flex-col gap-20 items-start text-start", className)}
    >
      <div className={"flex flex-row gap-2"}>
        {projects.map((p, idx) => (
          <ExpandableCard
            index={idx}
            name={p.name}
            selected={selected}
            onClick={() => setSelected(idx)}
          >
            <ExperienceHeader>
              <div className="flex flex-row w-full">
                {current.name}
                <div className="flex-grow" />
                <HiddenCat n={14 + 2 * idx} className="col-start-3" />
              </div>
            </ExperienceHeader>
            <ExperienceSubheader>{current.timespan}</ExperienceSubheader>
          </ExpandableCard>
        ))}
      </div>
      <div className="flex flex-row w-full justify-center">
        <ExperienceImage src={current.image} className="w-4/5" />
      </div>
      <div>{current.content}</div>
    </div>
  );
}
