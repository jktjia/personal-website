import HiddenCat from "@/components/cats/hidden-cat";
import {
  ExperienceHeader,
  ExperienceSubheader,
} from "@/components/experience-card";
import ProjectCards from "@/components/project-cards";
import imageProcessor from "@/assets/image-processor.png";
import cairn from "@/assets/cairnhome.png";
import loggr from "@/assets/loggr.png";

const projects = [
  {
    name: "Cairn",
    timespan: "January 2025",
    header: (
      <>
        <ExperienceHeader>
          <div className="grid w-full justify-center gap-6 items-center">
            <HiddenCat n={12} className="col-start-1" />
            Cairn
            <HiddenCat n={11} className="col-start-3" />
          </div>
        </ExperienceHeader>
        <ExperienceSubheader>January 2025</ExperienceSubheader>
      </>
    ),
    image: cairn,
    tags: ["TypeScript", "Tailwind", "React", "Docker", "Vite", "Git", "Azure"],
    content:
      "Platform for travelers to plan trips without having to worry about their schedule. Cairn allows its users to add events they find interesting while recommending a schedule that works around their current constraints. Our goal was to create a streamlined experience that allows users to plan trips while focusing on the events themselves.",
  },
  {
    name: "Loggr",
    timespan: "November - December 2023",
    header: (
      <>
        <ExperienceHeader>Loggr</ExperienceHeader>
        <ExperienceSubheader>November - December 2023</ExperienceSubheader>
      </>
    ),
    image: loggr,
    tags: ["MySQL", "Docker", "Python", "Flask", "Git", "Appsmith"],
    content:
      "Worked on a team of 5 students to create a simple social media app that allows users to log information of their choice publicly or privately, view other user's logs, and follow various topics and other users.",
  },
  {
    name: "Image Processor",
    timespan: "November - December 2022",
    header: (
      <>
        <ExperienceHeader>Image Processor</ExperienceHeader>
        <ExperienceSubheader>
          <div className="flex justify-center">
            <HiddenCat n={15} />
            <div className="flex-grow">November - December 2022</div>
            <HiddenCat n={16} />
          </div>
        </ExperienceSubheader>
      </>
    ),
    image: imageProcessor,
    tags: ["Java", "Swing"],
    content:
      "GUI application to apply filters and transform images that also allowed the user to import, export, and convert between four image formats structured using principles of object-oriented design and the MVC model.",
  },
];

export default function Projects() {
  return (
    <>
      <title>Projects</title>
      <div className="text-5xl pt-10 flex flex-row items-center gap-6">
        Projects <HiddenCat n={10} />
      </div>
      <ProjectCards className="max-w-7xl mb-10" projects={projects} />
    </>
  );
}
