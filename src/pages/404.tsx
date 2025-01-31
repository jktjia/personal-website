import "@/app/globals.css";

export default function Custom404() {
  return (
    <main className="p-20 grid gap-8 items-center justify-items-center sm:items-start min-h-screen min-w-screen bg-foreground text-background">
      <h1 className="text-4xl">404 - Page Not Found</h1>
      <p>You seem lost.</p>
    </main>
  );
}
