import "@/app/globals.css";
import Footer from "@/components/footer";

export default function About({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {children}
      </main>
      <Footer />
    </div>
  );
}
