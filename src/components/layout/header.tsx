import "@/lib/globals.css";
import { NavLink } from "react-router";
import HiddenCat from "../cats/hidden-cat";
import { Home } from "lucide-react";
import { useCats } from "@/hooks/use-cats";

function HeaderItem({
  label,
  redirect,
  className,
}: {
  label: string;
  redirect: string;
  className?: string;
}) {
  return (
    <NavLink to={redirect} className={className}>
      <div className="text-xl bg-inherit p-2 rounded-md hover:bg-tertiary">
        {label}
      </div>
    </NavLink>
  );
}

export default function Header() {
  const { catsRemaining } = useCats();

  return (
    <header className="fixed top-0 grid grid-cols-9 items-center justify-center text-background bg-foreground w-screen min-h-20 h-1/8">
      <div className="flex justify-end col-span-4">
        <HeaderItem label="About" redirect="about" />
      </div>
      <NavLink
        className="bg-tertiary rounded-md w-fit justify-self-center col-start-5"
        to="/"
      >
        <Home className="h-12 w-12 m-1" />
      </NavLink>
      <div className="flex justify-start col-span-4 items-center gap-10">
        <HeaderItem label="Experience" redirect="experience" />
        {catsRemaining() ? (
          <HiddenCat n={0} className="h-10 w-10" />
        ) : (
          <HeaderItem label="Cats" redirect="cats" />
        )}
      </div>
    </header>
  );
}
