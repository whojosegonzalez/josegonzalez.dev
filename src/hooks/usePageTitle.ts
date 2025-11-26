import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Jose Manuel Gonzalez";

const routes: Record<string, string> = {
  "/": "Home",
  "/projects": "Projects",
  "/contact": "Contact",
  "/movieaggregator": "Movie Aggregator",
  "/nexustrade": "NeXusTrade",
  "/minuteflow": "MinuteFlow",
};

export default function usePageTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    // Check direct match or default
    const title = routes[path] ?? "Portfolio";
    document.title = `${title} | ${SITE_NAME}`;
  }, [location]);
}