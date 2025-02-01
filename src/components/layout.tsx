import "@/lib/globals.css";
import Footer from "@/components/footer";
import { Outlet } from "react-router";
import Header from "./header";

export default function Layout() {
  return (
    <div className="m-0 grid justify-self-center-center items-center justify-items-center text-center min-w-screen min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
