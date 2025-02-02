import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/home";
import CatProvider from "./components/cats/cat-provider";
import Cats from "./pages/cats";
import Layout from "./components/layout";
import AlertsProvider from "./components/alerts/alert-provider";
import Work from "./pages/work";
import NotFound from "./pages/not-found";
import Projects from "./pages/projects";
import About from "./pages/about";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AlertsProvider>
        <CatProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="experience" element={<Work />} />
              <Route path="cats" element={<Cats />} />
              <Route path="projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CatProvider>
      </AlertsProvider>
    </BrowserRouter>
  </StrictMode>,
);
