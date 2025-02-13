import "@/lib/globals.css";
import HiddenCat from "@/components/cats/hidden-cat";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function About() {
  return (
    <>
      <div className="text-4xl flex flex-row items-center gap-2 pt-10 mx-5">
        About Me
        <HiddenCat n={2} />
      </div>
      <div className="text-lg text-start max-w-xl items-center mx-5">
        Hi! I&apos;m Kai, a third year at Northeastern University.
        <div className="min-w-full grid">
          <HiddenCat n={14} className="col-start-2" />
        </div>
        As a Computer Science and Biolgy student, I'm interested in using my
        programming skills to further the biological sciences.
        <div className="min-w-full grid">
          <HiddenCat n={13} className="col-start-2" />
        </div>
        I have experience quickly learning new programming languages and
        analyzing healthcare data from my internship at UMass Medical School,
        and my time as a TA has strengthened my communication skills and my
        knowledge of algorithms.
      </div>
      <div className="flex flex-row items-center mx-5 gap-2 hover:opacity-50 border-b-2 transition-colors border-transparent hover:border-primary dark:hover:border-white">
        <HiddenCat n={1} />
        <Link to="/cats">Cats</Link>
        <ArrowRight className="dark:text-white h-6 w-6" />
      </div>
    </>
  );
}
