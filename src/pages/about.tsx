import "@/app/globals.css";
import Footer from "@/components/footer";
import HiddenCat from "@/components/hidden-cat";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-center text-3xl">About</div>
        <div>
          Hi! I&apos;m Kai, a student at Northeastern University studying
          Computer Science and Biology.
        </div>
        <HiddenCat n={1} />
      </main>
      <Footer />
    </div>
  );
}
