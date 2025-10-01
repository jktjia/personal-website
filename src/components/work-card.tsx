import { useMemo, useState } from "react";
import { ExpandableCards } from "./experience-card";
import { WorkType } from "@/lib/types";
import useTypedMultiText from "@/hooks/use-typed-multi-text";
import { catIndices } from "@/lib/content/cats";

export default function WorkCards({
  jobs,
  className,
}: {
  jobs: WorkType[];
  className?: string;
}) {
  const [selected, setSelected] = useState(0);

  const current = useMemo(() => jobs[selected], [jobs, selected]);

  const { currentText, showAll } = useTypedMultiText(current.content);

  return (
    <ExpandableCards
      items={jobs.map((j) => {
        return { header: j.employer, subheader: j.position };
      })}
      selected={selected}
      setSelected={setSelected}
      startN={catIndices["work-cards"]}
      className={className}
    >
      <div
        className="flex flex-col sm:flex-row min-w-full justify-center gap-4"
        onClick={showAll}
      >
        <div className="flex flex-col sm:min-w-60 sm:max-w-60 gap-4">
          <div className="text-2xl font-bold">{current.employer}</div>
          {current.logo && <img src={current.logo} />}
          <div>{current.position}</div>
          <div className="opacity-50">{current.timespan}</div>
        </div>
        <ul className="list-disc pl-4 flex-grow">
          {currentText.map((t, idx) => t && <li key={idx}>{t}</li>)}
        </ul>
      </div>
    </ExpandableCards>
  );
}
