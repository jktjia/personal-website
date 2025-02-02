import "@/lib/globals.css";
import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";
import HiddenCat from "@/components/cats/hidden-cat";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen bg-primary text-white grid w-screen border-b-2 border-white relative top-0 left-0">
        <div className="row-start-2 font-mono gap-5 flex flex-col max-w-fit justify-self-center">
          <div className="text-4xl text-left">Hi, I&apos;m</div>
          <div className="text-8xl font-extrabold">Jamie Kai Tjia</div>
        </div>
        <HiddenCat n={6} className="absolute m-3" />
        <HiddenCat n={7} className="absolute m-3 bottom-0 right-0" />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-20 p-1.5" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-20 p-1.5 hover:drop-shadow"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="p-2">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
