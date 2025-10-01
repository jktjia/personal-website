import HiddenCat from "@/components/cats/hidden-cat";
import WorkCards from "@/components/work-card";
import { catIndices } from "@/lib/content/cats";
import { jobs } from "@/lib/content/jobs";
import "@/lib/globals.css";

export default function Work() {
  return (
    <>
      <title>Experience</title>
      <div className="text-4xl sm:text-5xl pt-10 w-full text-center flex flex-row gap-4 items-center">
        <div className="text-start flex-grow">Professional Experience</div>
        <HiddenCat n={catIndices["work-top"]} color="primary" />
      </div>
      <WorkCards className="w-7xl mb-10 max-w-full" jobs={jobs} />
    </>
  );
}
