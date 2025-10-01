import "@/lib/globals.css";
import HiddenCat from "@/components/cats/hidden-cat";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { about } from "@/lib/content/about";
import useTypedText from "@/hooks/use-typed-text";
import { catIndices } from "@/lib/content/cats";

export default function About() {
  const { currentText, currentIndex, showAll } = useTypedText(about);

  return (
    <>
      <title>About Me</title>
      <div className="text-4xl flex flex-row items-center gap-4 w-full pt-10">
        <div className="text-start">About Me</div>
        <HiddenCat n={catIndices["about-top"]} />
      </div>
      <div
        className="text-lg text-start max-w-full min-w-full sm:max-w-xl sm:min-w-xl items-center whitespace-pre-wrap"
        onClick={showAll}
      >
        {currentText}
      </div>
      {currentIndex > about.length && (
        <div className="flex flex-row items-center gap-2 hover:opacity-50 border-b-2 transition-colors border-transparent hover:border-primary dark:hover:border-white">
          <HiddenCat n={catIndices["about-bottom"]} />
          <Link to="/cats">Cats</Link>
          <ArrowRight className="dark:text-white h-6 w-6" />
        </div>
      )}
    </>
  );
}
