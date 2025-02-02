import "@/lib/globals.css";
import HiddenCat from "../cats/hidden-cat";

export default function Footer() {
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center text-white bg-primary w-screen min-h-20 h-1/8">
      <a
        href="https://www.linkedin.com/in/jktjia/"
        className="hover:underline hover:underline-offset-4"
        target="_blank"
      >
        LinkedIn
      </a>
      <HiddenCat n={3} />
      <a
        href="https://github.com/jktjia/"
        className="hover:underline hover:underline-offset-4"
        target="_blank"
      >
        GitHub
      </a>
    </footer>
  );
}
