import "@/lib/globals.css";
import { NavLink } from "react-router";
import HiddenCat from "../cats/hidden-cat";
import { useCats } from "@/hooks/use-cats";
import { cn } from "@/lib/utils";

function HeaderItem({
  label,
  to,
  className,
}: {
  label: string;
  to: string;
  className?: string;
}) {
  return (
    <NavLink
      to={to}
      className={cn(
        "text-xl bg-inherit rounded-md hover:underline hover:underline-offset-4",
        className,
      )}
    >
      {label}
    </NavLink>
  );
}

export default function Header() {
  const { catsRemaining } = useCats();

  return (
    <header className="z-10 sticky top-0 border-b-2 border-b-white flex flex-row items-center text-white bg-primary w-full min-h-20 h-1/8 gap-10 px-5">
      <HeaderItem
        label="Jamie Kai Tjia"
        to=""
        className="font-bold text-2xl italic"
      />
      {catsRemaining ? (
        <HiddenCat n={0} className="h-10 w-10" />
      ) : (
        <HeaderItem label="Cats" to="cats" />
      )}
      <HeaderItem label="Projects" to="projects" />
      <HeaderItem label="About" to="about" />
      <HeaderItem label="Experience" to="experience" />
    </header>
  );
}
