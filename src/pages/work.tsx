import HiddenCat from "@/components/cats/hidden-cat";
import {
  ExperienceHeader,
  ExperienceDescription,
  ExperienceSubheader,
  ExperienceTags,
} from "@/components/experience-card";
import WorkCard from "@/components/work-card";
import "@/lib/globals.css";

export default function Work() {
  return (
    <>
      <div className="text-5xl pt-10 w-full text-center">
        My Work Experience
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 pb-10 max-w-5xl">
        <HiddenCat n={8} />
        <WorkCard className="lg:col-start-1 lg:row-start-1 lg:row-span-2">
          <ExperienceHeader>Verizon Communications x NExT Lab</ExperienceHeader>
          <ExperienceSubheader>
            <div className="grid grid-cols-7">
              <HiddenCat n={5} className="col-start-1" />
              <div className="col-start-2 col-span-5">
                Software Engineering Co-op
                <div className="text-sm">
                  Boston, MA
                  <br />
                  January - July 2025
                </div>
              </div>
            </div>
          </ExperienceSubheader>
          <ExperienceDescription>
            <ul className="list-disc pl-4">
              <li>
                As part of a university-backed consulting group, led Agile
                workflows, conducted code reviews, wrote tickets, and managed
                client communications
              </li>
              <li>
                Wrote a scalable React app with Express REST API backend
                deployed using Azure Container Service and Docker Compose for
                onboarding
              </li>
            </ul>
          </ExperienceDescription>
          <ExperienceTags
            tags={["TypeScript", "Tailwind", "React", "Docker", "Vite", "Git"]}
          />
        </WorkCard>
        <WorkCard className="lg:col-start-2 lg:row-span-2">
          <ExperienceHeader>Northeastern University</ExperienceHeader>
          <ExperienceSubheader>
            Teaching Assistant for Algorithms
            <div className="text-sm">
              Boston, MA
              <br />
              September 2023 - December 2024
            </div>
          </ExperienceSubheader>
          <ExperienceDescription>
            <ul className="list-disc pl-4">
              <li>Gave students feedback on assignments and exams</li>
              <li>
                Wrote solutions for homework assignments and assigned TA grading
                responsibilities
              </li>
              <li>
                Facilitated 5+ hours of weekly recitations and office hours to
                help students understand class material
              </li>
              <li>
                Provided answers to student questions regarding class material
                and course organization on the course&apos;s Q&A platform
              </li>
            </ul>
          </ExperienceDescription>
          <ExperienceTags tags={["LaTeX", "Algorithms", "Teaching"]}>
            <HiddenCat n={4} className="text-secondary" />
          </ExperienceTags>
        </WorkCard>
        <WorkCard className="lg:col-start-1 lg:row-span-2">
          <ExperienceHeader>UMass Chan Medical School</ExperienceHeader>
          <ExperienceSubheader>
            Quantitative Methods Core Intern
            <div className="text-sm">
              Worcester, MA
              <br />
              June - August 2023
            </div>
          </ExperienceSubheader>
          <ExperienceDescription>
            <ul className="list-disc pl-4">
              <li>
                Analyzed datasets containing over 10 years data regarding drug
                data and clinical assessments of residents of all Medicare and
                Medicaid certified nursing homes in the US
              </li>
              <li>
                Taught graduate students and faculty how to make graphs using
                SAS so work could be recreated for similar projects after the
                internship ended
              </li>
              <li>
                Created and presented graphs using SAS which summarized
                important statistics of the national Minimum Data Set (MDS)
                healthcare data
              </li>
              <li>
                Reported in weekly team meetings to update the PI and rest of
                the research group on project progress
              </li>
            </ul>
          </ExperienceDescription>
          <ExperienceTags
            tags={["Data Analysis", "Data Visualization", "SAS"]}
          />
        </WorkCard>
        <div className="w-full h-full flex flex-row-reverse">
          <HiddenCat n={9} />
        </div>
      </div>
    </>
  );
}
