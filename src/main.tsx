import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/pages/app";
import CatProvider from "./components/cat-provider.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/about.tsx";
import Cats from "./pages/cats.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CatProvider count={3}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/cats" element={<Cats />} />
        </Routes>
      </CatProvider>
    </BrowserRouter>
  </StrictMode>,
);
