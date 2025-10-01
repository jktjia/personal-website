import { useMemo, useState } from "react";
import { ExpandableCards, ExperienceImage, ToolIcon } from "./experience-card";
import { ProjectType } from "@/lib/types";
import useTypedText from "@/hooks/use-typed-text";
import { catIndices } from "@/lib/content/cats";

export default function ProjectCards({
  projects,
  className,
}: {
  projects: ProjectType[];
  className?: string;
}) {
  const [selected, setSelected] = useState(0);
  const current = useMemo(() => projects[selected], [projects, selected]);

  const { currentText, showAll } = useTypedText(current.content);

  return (
    <ExpandableCards
      items={projects.map((p) => {
        return { header: p.name, subheader: p.timespan };
      })}
      selected={selected}
      setSelected={setSelected}
      startN={catIndices["project-cards"]}
      className={className}
    >
      <div className="grid sm:grid-cols-3 w-full gap-4 h-fit" onClick={showAll}>
        <ExperienceImage src={current.image} />
        <div className="sm:col-span-2 flex flex-col items-center gap-4 sm:p-4">
          <div className="w-full flex-grow text-start">{currentText}</div>
          <div className="w-full">
            <p className="opacity-75 mb-2">Tools:</p>
            <div className="flex flex-row flex-wrap gap-4 items-center w-full">
              {current.tools.map((t) => (
                <ToolIcon tool={t} key={t} />
              ))}
            </div>
          </div>
          <div className="w-full text-wrap">
            <span className="opacity-75">Role:</span>
            {" " + current.role}
          </div>
        </div>
      </div>
    </ExpandableCards>
  );
}
