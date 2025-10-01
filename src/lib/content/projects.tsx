import { ProjectType } from "../types";
import {
  ExperienceHeader,
  ExperienceSubheader,
} from "@/components/experience-card";
import HiddenCat from "@/components/cats/hidden-cat";
import imageProcessor from "/image-processor.png";
import cairn from "/cairnhome.png";
import loggr from "/loggr.png";

export const projects: ProjectType[] = [
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
        <ExperienceSubheader> January 2025 </ExperienceSubheader>
      </>
    ),
    image: cairn,
    tools: ["ts", "tailwind", "react", "vite", "azure", "docker", "git"],
    content:
      "Platform for travelers to plan trips without having to worry about their schedule. Cairn allows its users to add events they find interesting while recommending a schedule that works around their current constraints. Our goal was to create a streamlined experience that allows users to plan trips while focusing on the events themselves.",
    role: "Fullstack, primarily backend and DevOps",
  },
  {
    name: "Loggr",
    timespan: "November - December 2023",
    header: (
      <>
        <ExperienceHeader>Loggr </ExperienceHeader>
        <ExperienceSubheader> November - December 2023 </ExperienceSubheader>
      </>
    ),
    image: loggr,
    tools: ["python", "flask", "mysql", "docker", "git"],
    content:
      "Worked on a team of five to create a simple social media app that allows users to log information of their choice publicly or privately, view other user's logs, and follow various topics and other users.",
    role: "Frontend and database structure",
  },
  {
    name: "Image Processor",
    timespan: "November - December 2022",
    header: (
      <>
        <ExperienceHeader>Image Processor </ExperienceHeader>
        <ExperienceSubheader>
          <div className="flex justify-center">
            <HiddenCat n={15} />
            <div className="flex-grow"> November - December 2022 </div>
            <HiddenCat n={16} />
          </div>
        </ExperienceSubheader>
      </>
    ),
    image: imageProcessor,
    tools: ["java"],
    content:
      "GUI application to apply filters and transform images that also allowed the user to import, export, and convert between four image formats structured using principles of object-oriented design and the MVC model.",
    role: "Fullstack, part of pair working on project",
  },
];
