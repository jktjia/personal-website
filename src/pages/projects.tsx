import HiddenCat from "@/components/cats/hidden-cat";
import ProjectCards from "@/components/project-cards";
import { catIndices } from "@/lib/content/cats";
import { projects } from "@/lib/content/projects";

export default function Projects() {
  return (
    <>
      <title>Projects</title>
      <div className="text-4xl sm:text-5xl pt-10 w-full text-center flex flex-row gap-4 items-center">
        <div className="text-start">Projects</div>
        <HiddenCat n={catIndices["project-top"]} color="primary" />
      </div>
      <ProjectCards className="max-w-7xl mb-10 w-full" projects={projects} />
    </>
  );
}
