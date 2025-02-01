import HiddenCat from "@/components/cats/hidden-cat";
import ExperienceCard, {
  ExperienceCompany,
  ExperiencePosition,
} from "@/components/experience-card";
import "@/lib/globals.css";

export default function Experience() {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-200px">
      <HiddenCat n={4} className="col-start-2 row-start-1" />
      <ExperienceCard className="col-start-1 row-start-1 row-span-2">
        <ExperienceCompany>Verizon Communications x NExT Lab</ExperienceCompany>
        <ExperiencePosition>Software Engineering Co-op</ExperiencePosition>
      </ExperienceCard>
      <ExperienceCard className="col-start-2 row-start-2 row-span-2">
        <ExperienceCompany>Northeastern University</ExperienceCompany>
        <ExperiencePosition>
          <div className="grid grid-cols-5">
            <div className="col-start-2 col-span-3">TA for Algorithms</div>
            <HiddenCat n={5} className="col-start-5" />
          </div>
        </ExperiencePosition>
      </ExperienceCard>
      <div className="bg-secondary h-28 col-start-1 row-start-3 row-span-2 p-4 rounded-md">
        <p>Experience 2</p>
      </div>
    </div>
  );
}
