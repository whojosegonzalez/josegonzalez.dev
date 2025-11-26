import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MovieAggregator from "./pages/MovieAggregator";
import NeXusTrade from "./pages/NeXusTrade";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movieaggregator" element={<MovieAggregator />} />
          <Route path="/nexustrade" element={<NeXusTrade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);