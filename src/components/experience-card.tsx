import "@/lib/globals.css";
import { motion } from "motion/react";
import { cn, responsiveMargins } from "@/lib/utils";
import { ReactNode } from "react";
import HiddenCat from "./cats/hidden-cat";
import { toolInfo } from "@/lib/tools";

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
      className={cn(
        "h-full object-cover rounded-lg overflow-hidden",
        className,
      )}
      style={{ aspectRatio: "400/300" }}
    />
  );
}

export function ToolIcon({ tool }: { tool: string }) {
  return (
    <a
      className="h-10 aspect-square items-center justify-center flex hover:bg-foreground"
      key={tool}
      href={toolInfo[tool].href}
    >
      <img src={toolInfo[tool].logo} alt={toolInfo[tool].name} />
    </a>
  );
}

function ExpandableCard({
  index,
  selected,
  onClick,
  header,
  subheader,
  startN,
}: {
  index: number;
  selected: number;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  header: string;
  subheader: string;
  startN: number;
}) {
  return (
    <motion.div layout className="bg-primary">
      <div className="h-full items-center justify-center flex flex-col overflow-x-auto">
        {selected === index ? (
          <div className={responsiveMargins}>
            <ExperienceHeader>
              <div className="flex flex-row w-full">
                {header}
                <div className="flex-grow" />
                <HiddenCat n={startN + 1 + 2 * index} className="min-w-10" />
              </div>
            </ExperienceHeader>
            <ExperienceSubheader>{subheader}</ExperienceSubheader>
          </div>
        ) : (
          <>
            <button
              className={cn(
                responsiveMargins,
                "flex-grow text-start hover:opacity-50 h-36",
              )}
              style={{ writingMode: "vertical-rl" }}
              onClick={onClick}
            >
              {header}
            </button>
            <HiddenCat
              n={startN + 2 * index}
              className={cn(responsiveMargins, "bottom-0 relative")}
            />
          </>
        )}
      </div>
    </motion.div>
  );
}

export function ExpandableCards({
  items,
  selected,
  setSelected,
  startN,
  children,
  className,
}: {
  items: { header: string; subheader: string }[];
  selected: number;
  setSelected: (n: number) => void;
  startN: number;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-10 sm:gap-20 items-start text-start max-w-full",
        className,
      )}
    >
      <motion.div
        layout
        className={"flex flex-row gap-2 max-w-full overflow-x-auto"}
      >
        {items.map((x, idx) => (
          <ExpandableCard
            key={idx}
            index={idx}
            selected={selected}
            onClick={() => setSelected(idx)}
            header={x.header}
            subheader={x.subheader}
            startN={startN}
          />
        ))}
      </motion.div>
      {children}
    </div>
  );
}
