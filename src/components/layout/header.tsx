import "@/lib/globals.css";
import { NavLink } from "react-router";
import HiddenCat from "../cats/hidden-cat";
import { Home } from "lucide-react";
import { useCats } from "@/hooks/use-cats";

function HeaderItem({
  label,
  redirect,
}: {
  label: string;
  redirect: string;
  className?: string;
}) {
  return (
    <NavLink to={redirect}>
      <div className="text-xl bg-inherit p-2 rounded-md hover:underline hover:underline-offset-4">
        {label}
      </div>
    </NavLink>
  );
}

export default function Header() {
  const { catsRemaining } = useCats();

  return (
    <header className="z-10 sticky top-0 border-b-2 border-b-white grid grid-cols-9 items-center justify-center text-white bg-primary w-screen min-h-20 h-1/8">
      <div className="flex justify-end col-span-4 items-center gap-10">
        <HeaderItem label="About" redirect="about" />
        <HeaderItem label="Experience" redirect="experience" />
      </div>
      <NavLink
        className="bg-secondary rounded-md w-fit justify-self-center col-start-5"
        to="/"
      >
        <Home className="h-12 w-12 m-1" />
      </NavLink>
      <div className="flex justify-start col-span-3 items-center gap-10">
        <HeaderItem label="Projects" redirect="projects" />
        <HeaderItem label="Contact" redirect="contact" />
      </div>
      <div>
        {catsRemaining() ? (
          <HiddenCat n={0} className="h-10 w-10" />
        ) : (
          <HeaderItem label="Cats" redirect="cats" />
        )}
      </div>
    </header>
  );
}
