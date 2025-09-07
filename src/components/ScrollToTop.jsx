import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration so it doesn't drop you at the old position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If there’s a hash (#section), let the browser handle the jump
    if (hash) return;

    // Scroll to top after layout/paint to avoid layout-shift fighting
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [pathname, hash]);

  return null;
}
