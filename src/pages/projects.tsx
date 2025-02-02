import HiddenCat from "@/components/cats/hidden-cat";
import ExperienceCard, {
  ExperienceDescription,
  ExperienceHeader,
  ExperienceSubheader,
  ExperienceTags,
} from "@/components/experience-card";

export default function Projects() {
  return (
    <>
      <div className="text-5xl pt-10 pl-6">My Projects</div>
      <div className="grid gap-6 pb-10 p-6 max-w-7xl lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <ExperienceCard>
          <ExperienceHeader>
            <a href="https://github.com/jktjia/CS3200-project" target="_blank">
              Loggr
            </a>
          </ExperienceHeader>
          <ExperienceSubheader>Database Design Project</ExperienceSubheader>
          <ExperienceDescription>
            Simple social media app that allows users to log information of
            their choice publicly or privately, view other user&apos;s logs, and
            follow various topics and other users
          </ExperienceDescription>
          <ExperienceTags tags={["MySQL", "Docker", "Flask", "Git"]}>
            <HiddenCat n={10} color="secondary" />
          </ExperienceTags>
        </ExperienceCard>
        <ExperienceCard>
          <ExperienceHeader>
            <a
              href="https://github.com/jktjia/CS3500-image-processor"
              target="_blank"
            >
              Image Processor
            </a>
          </ExperienceHeader>
          <ExperienceSubheader>
            Object-Oriented Design Project
          </ExperienceSubheader>
          <ExperienceDescription>
            GUI application to apply filters and transform images that also
            allowed the user to import, export, and convert between four image
            formats structured using principles of object-oriented design and
            the MVC model
          </ExperienceDescription>
          <ExperienceTags tags={["Java", "Swing"]} />
        </ExperienceCard>
      </div>
    </>
  );
}
