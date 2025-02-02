import "@/lib/globals.css";
import HiddenCat from "@/components/cats/hidden-cat";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex-grow text-white grid w-screen border-b-2 border-white relative top-0 left-0">
      <div className="row-start-2 font-mono gap-5 flex flex-col max-w-fit justify-self-center">
        <div className="text-4xl text-left">Hi, I&apos;m</div>
        <div className="text-8xl font-extrabold">Jamie Kai Tjia</div>
      </div>
      <HiddenCat n={6} className="absolute m-3" />
      <HiddenCat n={7} className="absolute m-3 bottom-0 right-0" />
    </div>
  );
}
