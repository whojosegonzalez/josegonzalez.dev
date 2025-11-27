import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy Load the heavy/secondary pages
const MovieAggregator = lazy(() => import("./pages/MovieAggregator"));
const NeXusTrade = lazy(() => import("./pages/NeXusTrade"));
const MinuteFlow = lazy(() => import("./pages/MinuteFlow"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Create a simple Loading Spinner/Message component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<RootLayout />}>
            {/* Eager Routes (Load immediately) */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Lazy Routes (Load only when clicked) */}
            <Route path="/movieaggregator" element={
              <Suspense fallback={<PageLoader />}>
                <MovieAggregator />
              </Suspense>
            } />
            <Route path="/nexustrade" element={
              <Suspense fallback={<PageLoader />}>
                <NeXusTrade />
              </Suspense>
            } />
            <Route path="/minuteflow" element={
              <Suspense fallback={<PageLoader />}>
                <MinuteFlow />
              </Suspense>
            } />
            
            <Route path="*" element={
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);