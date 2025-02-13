import { Children, ReactNode, useState } from "react";
import HiddenCat from "./cats/hidden-cat";
import { ExperienceImage } from "./experience-card";

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
    <div
      className={
        "bg-tertiary rounded-lg text-primary font-serif " +
        "items-center justify-center flex flex-col"
      }
    >
      {selected === index ? (
        children
      ) : (
        <>
          <button
            className="md:m-5 m-2 flex-grow text-start hover:opacity-50"
            style={{ writingMode: "vertical-lr" }}
            onClick={onClick}
          >
            {name}
          </button>
          <HiddenCat n={15 + index} className="md:m-5 m-2 bottom-0 relative" />
        </>
      )}
    </div>
  );
}

export function ProjectCard({
  imageSrc,
  children,
  className,
}: {
  imageSrc: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={"flex-col p-10 " + className}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-[50vh] flex justify-center">
          <ExperienceImage src={imageSrc} className="max-h-full" />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default function ProjectCards({
  projectNames,
  className,
  children,
}: {
  projectNames: string[];
  className?: string;
  children: ReactNode;
}) {
  const [selected, setSelected] = useState(0);
  const cardsArray = Children.toArray(children);

  return (
    <div className={"flex flex-row gap-2 h-fit " + className}>
      {cardsArray.map((card, idx) => (
        <ExpandableCard
          index={idx}
          name={projectNames[idx]}
          selected={selected}
          onClick={() => setSelected(idx)}
        >
          {card}
        </ExpandableCard>
      ))}
    </div>
  );
}
