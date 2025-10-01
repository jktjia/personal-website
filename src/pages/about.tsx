import "@/lib/globals.css";
import HiddenCat from "@/components/cats/hidden-cat";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { about } from "@/lib/content/about";
import useTypedText from "@/hooks/use-typed-text";
import { catIndices } from "@/lib/content/cats";

export default function About() {
  const { currentText, showAll } = useTypedText(about);

  return (
    <>
      <title>About Me</title>
      <div className="text-4xl flex flex-row items-center w-full pt-10">
        <div className="flex-grow text-start">About Me</div>
        <HiddenCat n={catIndices["about-top"]} />
      </div>
      <div
        className="text-lg text-start max-w-full min-w-full sm:max-w-xl sm:min-w-xl items-center whitespace-pre-wrap"
        onClick={showAll}
      >
        {/* Hi! I&apos;m Kai, a third year at Northeastern University.
        <div className="min-w-full grid">
          <HiddenCat n={12} className="col-start-2" />
        </div>
        As a Computer Science and Biolgy student, I'm interested in using my
        programming skills to further the biological sciences.
        <div className="min-w-full grid">
          <HiddenCat n={11} className="col-start-2" />
        </div>
        I have experience quickly learning new programming languages and
        analyzing healthcare data from my internship at UMass Medical School,
        and my time as a TA has strengthened my communication skills and my
        knowledge of algorithms. At my recent co-op at NExT, I worked as a
        full-stack developer and I also mangaged client communications. */}
        {currentText}
      </div>
      <div className="flex flex-row items-center gap-2 hover:opacity-50 border-b-2 transition-colors border-transparent hover:border-primary dark:hover:border-white">
        <HiddenCat n={catIndices["about-bottom"]} />
        <Link to="/cats">Cats</Link>
        <ArrowRight className="dark:text-white h-6 w-6" />
      </div>
    </>
  );
}
