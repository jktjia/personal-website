import "@/lib/globals.css";
import Footer from "@/components/layout/footer";
import { Outlet } from "react-router";
import Header from "./header";

export default function Layout() {
  return (
    <div className="m-0 flex flex-col justify-self-center-center items-center justify-items-center text-center min-w-screen min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex-grow flex flex-col gap-8 items-center sm:items-start overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
