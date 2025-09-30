import { useMemo, useState } from "react";
import { ExpandableCards, ExperienceImage, ToolIcon } from "./experience-card";
import { ProjectType } from "@/lib/types";

export default function ProjectCards({
  projects,
  className,
}: {
  projects: ProjectType[];
  className?: string;
}) {
  const [selected, setSelected] = useState(0);

  const current = useMemo(() => projects[selected], [projects, selected]);

  return (
    <ExpandableCards
      items={projects.map((p) => {
        return { header: p.name, subheader: p.timespan };
      })}
      selected={selected}
      setSelected={setSelected}
      startN={13}
      className={className}
    >
      <div className="grid sm:grid-cols-3 w-full gap-4 h-fit">
        <ExperienceImage src={current.image} />
        <div className="sm:col-span-2 flex flex-col items-center gap-4 sm:p-4">
          <div className="flex-grow">{current.content}</div>
          <div className="w-full">
            <p className="opacity-75 mb-2">Tools:</p>
            <div className="flex flex-row flex-wrap gap-4 items-center w-full">
              {current.tools.map((t) => (
                <ToolIcon tool={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ExpandableCards>
  );
}
