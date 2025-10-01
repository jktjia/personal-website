import "@/lib/globals.css";
import HiddenCat from "@/components/cats/hidden-cat";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
import ScrollAppearDiv from "@/components/scroll-appear-div";
import useTypedText from "@/hooks/use-typed-text";
import useTypedMultiText from "@/hooks/use-typed-multi-text";
import { catIndices } from "@/lib/content/cats";

function HomePageLink({
  label,
  to,
  className,
}: {
  label: string;
  to: string;
  className?: string;
}) {
  const { currentText } = useTypedText(label);

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
      {currentText}
      <ArrowRight className="text-white" />
    </NavLink>
  );
}

const greeting = "Hi, I'm";
const name = "Jamie Kai Tjia";
const text = [greeting, name];

export default function Home() {
  const { currentText, currentIndex, showAll } = useTypedMultiText(text, 50);

  return (
    <>
      <title>Home</title>
      <div
        className={cn(
          "bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-40%",
          "to-emerald-500 to-80% bg-clip-text text-transparent flex-grow w-screen",
          "grid relative",
        )}
        onClick={showAll}
      >
        <ScrollAppearDiv className="row-start-2 font-mono gap-5 flex flex-col max-w-fit justify-self-center">
          <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-left">
            {currentText[0]}
          </div>
          <div className="lg:text-9xl md:text-8xl sm:text-7xl text-4xl font-extrabold ">
            {currentText[1]}
          </div>
          {currentIndex > greeting.length + name.length && (
            <div className="flex flex-col lg:text-3xl md:text-2xl sm:text-xl text-lg">
              <HomePageLink to="experience" label="Work Experience" />
              {/* <HomePageLink to="contact" label="Contact Me" /> */}
            </div>
          )}
        </ScrollAppearDiv>
        <HiddenCat
          n={catIndices["home-top"]}
          className="absolute m-3 dark:text-white"
        />
      </div>
      <HiddenCat
        n={catIndices["home-bottom"]}
        className="absolute m-3 bottom-0 right-0 dark:text-white"
      />
    </>
  );
}
