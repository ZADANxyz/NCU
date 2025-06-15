
import { useEffect, useState } from "react";

/**
 * Returns true if the provided footer ref is visible in the viewport.
 */
export function useFooterVisible(footerId: string = "site-footer") {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById(footerId);
    if (!footer) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        setFooterVisible(entries[0]?.isIntersecting || false);
      },
      { threshold: 0 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, [footerId]);

  return footerVisible;
}
