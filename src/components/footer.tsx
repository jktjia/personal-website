import "@/app/globals.css";
import Link from "next/link";
import HiddenCat from "./hidden-cat";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 flex gap-6 flex-wrap items-center justify-center bg-foreground text-background w-screen min-h-20 h-1/6">
      <Link
        href="https://www.linkedin.com/in/jktjia/"
        className="hover:underline hover:underline-offset-4"
        target="_blank"
      >
        LinkedIn
      </Link>
      <HiddenCat n={2} />
      <Link
        href="https://github.com/jktjia/"
        className="hover:underline hover:underline-offset-4"
        target="_blank"
      >
        GitHub
      </Link>
    </footer>
  );
}
