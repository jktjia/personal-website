import "@/lib/globals.css";
import { NavLink } from "react-router";
import HiddenCat from "./hidden-cat";

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
      <div className="text-xl hover:text-background">{label}</div>
    </NavLink>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 grid grid-cols-9 gap-6 items-center justify-center text-background bg-foreground w-screen min-h-20 h-1/8">
      <div className="flex justify-end col-span-4">
        <HeaderItem label="About" redirect="about" />
      </div>
      <NavLink
        className="bg-tertiary rounded-md w-fit justify-self-center col-start-5"
        to="/"
      >
        <HiddenCat n={3} className="h-12 w-12" />
      </NavLink>
      <div className="flex justify-start">
        <HeaderItem label="Experience" redirect="/" />
      </div>
    </header>
  );
}
