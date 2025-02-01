import "@/lib/globals.css";
import HiddenCat from "@/components/hidden-cat";

export default function About() {
  return (
    <>
      <div className="text-center text-3xl flex flex-row items-center gap-2">
        About
        <HiddenCat n={2} />
      </div>
      <div>
        Hi! I&apos;m Kai, a student at Northeastern University studying Computer
        Science and Biology.
      </div>
      <HiddenCat n={1} />
    </>
  );
}
