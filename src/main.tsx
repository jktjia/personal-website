import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/home";
import CatProvider from "./components/cats/cat-provider";
import About from "./pages/about";
import Cats from "./pages/cats";
import Layout from "./components/layout";
import AlertsProvider from "./components/alerts/alert-provider";
import Experience from "./pages/experience";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AlertsProvider>
        <CatProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="experience" element={<Experience />} />
              <Route path="cats" element={<Cats />} />
            </Route>
          </Routes>
        </CatProvider>
      </AlertsProvider>
    </BrowserRouter>
  </StrictMode>,
);
