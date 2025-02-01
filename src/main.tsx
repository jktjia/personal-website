import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "@/pages/app";
import CatProvider from "./components/cat-provider.tsx";
import About from "./pages/about.tsx";
import Cats from "./pages/cats.tsx";
import Layout from "./components/layout.tsx";
import AlertsProvider from "./components/alert/alert-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AlertsProvider>
        <CatProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<App />} />
              <Route path="about" element={<About />} />
              <Route path="cats" element={<Cats />} />
            </Route>
          </Routes>
        </CatProvider>
      </AlertsProvider>
    </BrowserRouter>
  </StrictMode>,
);
