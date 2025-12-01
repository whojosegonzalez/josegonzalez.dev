import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Eager Imports (Load immediately for better UX on main pages)
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy Load the heavy/secondary pages (Only load when clicked)
const MovieAggregator = lazy(() => import("./pages/MovieAggregator"));
const NeXusTrade = lazy(() => import("./pages/NeXusTrade"));
const MinuteFlow = lazy(() => import("./pages/MinuteFlow"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SecureChat = lazy(() => import("./pages/SecureChat"));
// Deleted "const Resume = lazy..." to fix the name collision error

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
            {/* Eager Routes (Main Navigation) */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/securechat" element={<SecureChat />} />
            {/* Lazy Routes (Project Details & 404) */}
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