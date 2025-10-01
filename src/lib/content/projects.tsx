import { ProjectType } from "../types";

export const projects: ProjectType[] = [
  {
    name: "Cairn",
    timespan: "January 2025",
    image: "projects/cairnhome.png",
    tools: ["ts", "tailwind", "react", "vite", "azure", "docker", "git"],
    content:
      "Platform for travelers to plan trips without having to worry about their schedule. Cairn allows its users to add events they find interesting while recommending a schedule that works around their current constraints. Our goal was to create a streamlined experience that allows users to plan trips while focusing on the events themselves.",
    role: "Fullstack, primarily backend and DevOps",
    hideCatContent: true,
  },
  {
    name: "Loggr",
    timespan: "November - December 2023",
    image: "projects/loggr.png",
    tools: ["python", "flask", "mysql", "docker", "git"],
    content:
      "Worked on a team of five to create a simple social media app that allows users to log information of their choice publicly or privately, view other user's logs, and follow various topics and other users.",
    role: "Frontend and database structure",
    hideCatContent: true,
  },
  {
    name: "Image Processor",
    timespan: "November - December 2022",
    image: "projects/image-processor.png",
    tools: ["java"],
    content:
      "GUI application to apply filters and transform images that also allowed the user to import, export, and convert between four image formats structured using principles of object-oriented design and the MVC model.",
    role: "Fullstack, part of pair working on project",
  },
];
