import "@/app/globals.css";
import HiddenCat from "@/components/hidden-cat";
import PageBase from "@/components/page-base";

export default function About() {
  return (
    <PageBase>
      <div className="text-center text-3xl flex flex-row items-center gap-2">
        About
        <HiddenCat n={2} />
      </div>
      <div>
        Hi! I&apos;m Kai, a student at Northeastern University studying Computer
        Science and Biology.
      </div>
      <HiddenCat n={1} />
    </PageBase>
  );
}
