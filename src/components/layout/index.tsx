import "@/lib/globals.css";
import Footer from "@/components/layout/footer";
import { Outlet } from "react-router";
import Header from "./header";
import { cn, responsiveMargins } from "@/lib/utils";

export default function Layout() {
  return (
    <div className="m-0 flex flex-col justify-self-center-center items-center justify-items-center text-center min-w-full min-h-screen font-mono">
      <Outlet />
      <Footer />
    </div>
  );
}

export function HeaderLayout() {
  return (
    <>
      <Header />
      <main
        className={cn(
          responsiveMargins,
          "flex-grow flex flex-col gap-8 items-center sm:items-start overflow-y-auto max-w-screen px-5",
        )}
      >
        <Outlet />
      </main>
    </>
  );
}
