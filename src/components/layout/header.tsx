import "@/lib/globals.css";
import { NavLink } from "react-router";
import HiddenCat from "../cats/hidden-cat";
import { useCats } from "@/hooks/use-cats";
import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";
import { Menu } from "lucide-react";
import { catIndices } from "@/lib/content/cats";

function HeaderItem({
  label,
  to,
  className,
}: {
  label: string;
  to: string;
  className?: string;
}) {
  return (
    <NavLink
      to={to}
      className={cn(
        "text-xl bg-inherit rounded-md hover:underline hover:underline-offset-4",
        className,
      )}
    >
      {label}
    </NavLink>
  );
}

function MenuItems() {
  const { catsRemaining } = useCats();
  return (
    <>
      {catsRemaining ? (
        <HiddenCat n={catIndices["header"]} className="h-10 w-10" />
      ) : (
        <HeaderItem label="Cats" to="cats" />
      )}
      <HeaderItem label="About" to="about" />
      <HeaderItem label="Projects" to="projects" />
      <HeaderItem label="Experience" to="experience" />
    </>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = useCallback(() => {
    setMenuOpen((m) => !m);
  }, [setMenuOpen]);

  return (
    <header
      className={cn(
        "sm:sticky top-0 border-b-2 border-b-white flex flex-col items-center text-white bg-primary w-full gap-4 px-5 min-h-20 z-1",
        menuOpen ? "h-fit" : "h-1/8",
      )}
    >
      <div
        className={cn(
          "flex flex-row items-center w-full gap-10 min-h-20",
          menuOpen ? "border-b-2 border-b-white" : "border-none",
        )}
      >
        <HeaderItem
          label="Jamie Kai Tjia"
          to=""
          className="font-bold text-2xl italic"
        />
        <div className="hidden sm:flex flex-row items-center gap-10">
          <MenuItems />
        </div>
        <div className="flex flex-grow sm:hidden items-center justify-end">
          <Menu className="h-10 w-10" onClick={toggleMenu} />
        </div>
      </div>
      <div
        className={cn(
          "flex-col-reverse gap-4 items-end w-full pb-4",
          menuOpen ? "flex" : "hidden",
        )}
        onClick={toggleMenu}
      >
        <MenuItems />
      </div>
    </header>
  );
}
