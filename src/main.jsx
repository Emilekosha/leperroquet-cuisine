import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Publicite from "./Pages/Publicite";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/leperroquet-cuisine">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/publicite" element={<Publicite />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
