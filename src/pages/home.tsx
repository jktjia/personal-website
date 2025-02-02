import "@/lib/globals.css";
import HiddenCat from "@/components/cats/hidden-cat";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";

function HomePageLink({
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
        "flex flex-row border-b-2 border-transparent hover:border-primary dark:hover:border-white gap-2 w-fit",
        className,
      )}
    >
      {label}
      <ArrowRight className="dark:text-white" />
    </NavLink>
  );
}

export default function Home() {
  return (
    <div
      className={
        "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" +
        "text-white dark:bg-clip-text dark:text-transparent flex-grow w-screen grid relative"
      }
    >
      <div className="row-start-2 font-mono gap-5 flex flex-col max-w-fit justify-self-center">
        <div className="text-4xl text-left">Hi, I&apos;m</div>
        <div className="text-8xl font-extrabold">Jamie Kai Tjia</div>
        <div className="flex flex-col">
          <HomePageLink to="about" label="About Me" />
          <HomePageLink to="contact" label="Contact Me" />
        </div>
      </div>
      <HiddenCat n={6} className="absolute m-3 dark:text-white" />
      <HiddenCat
        n={7}
        className="absolute m-3 bottom-0 right-0 dark:text-white"
      />
    </div>
  );
}
