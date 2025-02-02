import HiddenCat from "@/components/cats/hidden-cat";
import ExperienceCard, {
  ExperienceCompany,
  ExperienceContent,
  ExperiencePosition,
} from "@/components/experience-card";
import "@/lib/globals.css";

export default function Experience() {
  return (
    <>
      <div className="text-5xl pt-10 w-full text-center">
        My Work Experience
      </div>
      <div className="grid grid-cols-2 gap-6 max-w-200px pb-10">
        <HiddenCat n={7} className="static top-0" />
        <ExperienceCard className="col-start-1 row-start-1 row-span-2">
          <ExperienceCompany>
            Verizon Communications x NExT Lab
          </ExperienceCompany>
          <ExperiencePosition>Software Engineering Co-op</ExperiencePosition>
          <ExperienceContent>
            <ul className="list-disc">
              <li>Collaborated with 5 other developers</li>
            </ul>
          </ExperienceContent>
        </ExperienceCard>
        <ExperienceCard className="col-start-2 row-start-2 row-span-2">
          <ExperienceCompany>Northeastern University</ExperienceCompany>
          <ExperiencePosition>
            <div className="grid grid-cols-5">
              <div className="col-start-2 col-span-3">
                Teaching Assistant for Algorithms
              </div>
              <HiddenCat n={5} className="col-start-5" />
            </div>
          </ExperiencePosition>
          <ExperienceContent>
            <ul className="list-disc">
              <li>Gave students feedback on assignments and exams</li>
              <li>
                Wrote solutions for homework assignments and assigned TA grading
                responsibilities
              </li>
              <li>
                Facilitated 3+ hours of weekly recitations to help students
                understand class material
              </li>
              <li>
                Provided answers to student questions regarding class material
                and course organization in weekly office hours and on the
                course&apos;s Q&A platform
              </li>
            </ul>
          </ExperienceContent>
        </ExperienceCard>
        <ExperienceCard className="col-start-1 row-span-2">
          <ExperienceCompany>UMass Chan Medical School</ExperienceCompany>
          <ExperiencePosition>
            Quantitative Methods Core Intern
          </ExperiencePosition>
          <ExperienceContent>
            <ul className="list-disc">
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
                <HiddenCat n={4} />
              </li>
            </ul>
          </ExperienceContent>
        </ExperienceCard>
      </div>
    </>
  );
}
