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
      <div className="text-5xl pt-10 pl-6">My Projects</div>
      <ProjectCards
        className="m-2 max-w-7xl mb-10"
        projectNames={["Cairn", "Loggr", "Image Processor"]}
      >
        <ProjectCard imageSrc={cairn}>
          <ExperienceHeader>
            <div className="grid w-full justify-center gap-6 items-center">
              <HiddenCat n={12} color="secondary" className="col-start-1" />
              <a
                href="https://cairn-frontend.wittyfield-769b814d.eastus.azurecontainerapps.io/"
                target="_blank"
                className="hover:underline-offset-4 hover:underline col-start-2"
              >
                Cairn
              </a>
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
        <ProjectCard imageSrc={loggr}>
          <ExperienceHeader>
            <a
              href="https://github.com/jktjia/CS3200-project"
              target="_blank"
              className="hover:underline-offset-4 hover:underline"
            >
              Loggr
            </a>
          </ExperienceHeader>
          <ExperienceSubheader>November - December 2023</ExperienceSubheader>
          <ExperienceDescription>
            Simple social media app that allows users to log information of
            their choice publicly or privately, view other user&apos;s logs, and
            follow various topics and other users.
          </ExperienceDescription>
          <ExperienceTags tags={["MySQL", "Docker", "Flask", "Git"]}>
            <HiddenCat n={10} color="secondary" />
          </ExperienceTags>
        </ProjectCard>
        <ProjectCard imageSrc={imageProcessor}>
          <ExperienceHeader>
            <a
              href="https://github.com/jktjia/CS3500-image-processor"
              target="_blank"
              className="hover:underline-offset-4 hover:underline"
            >
              Image Processor
            </a>
          </ExperienceHeader>
          <ExperienceSubheader>November - December 2022</ExperienceSubheader>
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
