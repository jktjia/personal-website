import "@/lib/globals.css";
import HiddenCat from "@/components/cats/hidden-cat";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
import ScrollAppearDiv from "@/components/scroll-appear-div";

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
        "flex flex-row border-b-2 border-transparent hover:border-primary",
        "dark:hover:border-white gap-2 w-fit items-center hover:gap-3 transition-all",
        "ease-in",
        className,
      )}
    >
      {label}
      <ArrowRight className="text-white" />
    </NavLink>
  );
}

export default function Home() {
  return (
    <>
      <title>Home</title>
      <div
        className={cn(
          "bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-40%",
          "to-emerald-500 to-80% bg-clip-text text-transparent flex-grow w-screen",
          "grid relative",
        )}
      >
        <ScrollAppearDiv className="row-start-2 font-mono gap-5 flex flex-col max-w-fit justify-self-center">
          <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-left">
            Hi, I&apos;m
          </div>
          <div className="lg:text-9xl md:text-8xl sm:text-7xl text-4xl font-extrabold">
            Jamie Kai Tjia
          </div>
          <div className="flex flex-col lg:text-3xl md:text-2xl sm:text-xl text-lg">
            <HomePageLink to="projects" label="Projects" />
            {/* <HomePageLink to="contact" label="Contact Me" /> */}
          </div>
        </ScrollAppearDiv>
        <HiddenCat n={6} className="absolute m-3 dark:text-white" />
      </div>
      <HiddenCat
        n={7}
        className="absolute m-3 bottom-0 right-0 dark:text-white"
      />
    </>
  );
}
