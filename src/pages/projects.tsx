import HiddenCat from "@/components/cats/hidden-cat";
import {
  ExperienceDescription,
  ExperienceHeader,
  ExperienceSubheader,
  ExperienceTags,
} from "@/components/experience-card";
import ProjectCards, { ProjectCard } from "@/components/project-cards";
import imageProcessor from "@/assets/image-processor.png";
import cairn from "@/assets/cairn.png";
import loggr from "@/assets/loggr.png";

export default function Projects() {
  return (
    <>
      <title>My Projects</title>
      <div className="text-5xl pt-10 pl-6">My Projects</div>
      <ProjectCards
        className="max-w-7xl mb-10"
        projectNames={["Cairn", "Loggr", "Image Processor"]}
      >
        <ProjectCard
          href="https://cairn-frontend.wittyfield-769b814d.eastus.azurecontainerapps.io/"
          imageSrc={cairn}
        >
          <ExperienceHeader>
            <div className="grid w-full justify-center gap-6 items-center">
              <HiddenCat n={12} color="secondary" className="col-start-1" />
              Cairn
              <HiddenCat n={11} color="secondary" className="col-start-3" />
            </div>
          </ExperienceHeader>
          <ExperienceSubheader>January 2025</ExperienceSubheader>
          <ExperienceDescription>
            Platform for travelers to plan trips without having to worry about
            their schedule. Cairn allows its users to add events they find
            interesting while recommending a schedule that works around their
            current constraints. Our goal was to create a streamlined experience
            that allows users to plan trips while focusing on the events
            themselves.
          </ExperienceDescription>
          <ExperienceTags
            tags={[
              "TypeScript",
              "Tailwind",
              "React",
              "Docker",
              "Vite",
              "Git",
              "Azure",
            ]}
          />
        </ProjectCard>
        <ProjectCard
          href="https://github.com/jktjia/CS3200-project"
          imageSrc={loggr}
        >
          <ExperienceHeader>Loggr</ExperienceHeader>
          <ExperienceSubheader>November - December 2023</ExperienceSubheader>
          <ExperienceDescription>
            Worked on a team of 5 students to create a simple social media app
            that allows users to log information of their choice publicly or
            privately, view other user&apos;s logs, and follow various topics
            and other users.
          </ExperienceDescription>
          <ExperienceTags
            tags={["MySQL", "Docker", "Python", "Flask", "Git", "Appsmith"]}
          >
            <HiddenCat n={10} color="secondary" />
          </ExperienceTags>
        </ProjectCard>
        <ProjectCard
          href="https://github.com/jktjia/CS3500-image-processor"
          imageSrc={imageProcessor}
        >
          <ExperienceHeader>Image Processor</ExperienceHeader>
          <ExperienceSubheader>
            <div className="flex justify-center">
              <HiddenCat n={15} />
              <div className="flex-grow">November - December 2022</div>
              <HiddenCat n={16} />
            </div>
          </ExperienceSubheader>
          <ExperienceDescription>
            GUI application to apply filters and transform images that also
            allowed the user to import, export, and convert between four image
            formats structured using principles of object-oriented design and
            the MVC model.
          </ExperienceDescription>
          <ExperienceTags tags={["Java", "Swing"]} />
        </ProjectCard>
      </ProjectCards>
    </>
  );
}
