import { useMemo, useState } from "react";
import { ExpandableCards } from "./experience-card";
import { WorkType } from "@/lib/types";

export default function WorkCards({
  jobs,
  className,
}: {
  jobs: WorkType[];
  className?: string;
}) {
  const [selected, setSelected] = useState(0);

  const current = useMemo(() => jobs[selected], [jobs, selected]);

  return (
    <ExpandableCards
      items={jobs.map((j) => {
        return { header: j.employer, subheader: j.position };
      })}
      selected={selected}
      setSelected={setSelected}
      startN={4}
      className={className}
    >
      <div className="flex flex-col sm:flex-row w-full justify-center gap-4">
        <div className="flex flex-col sm:w-1/3 gap-4">
          <div className="text-2xl font-bold">{current.employer}</div>
          {current.logo && <img src={current.logo} />}
          <div>{current.position}</div>
          <div className="opacity-50">{current.timespan}</div>
        </div>
        <div>{current.content}</div>
      </div>
    </ExpandableCards>
  );
}
