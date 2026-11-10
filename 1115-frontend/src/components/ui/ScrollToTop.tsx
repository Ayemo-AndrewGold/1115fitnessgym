"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const SCROLL_THRESHOLD = 400;

export default function ScrollToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const isHidden = SITE_CONFIG.hiddenWidgetPaths.some((p) =>
    pathname.startsWith(p)
  );

  useEffect(() => {
    if (isHidden) return;
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="fixed z-50 flex items-center justify-center focus-visible:outline-none"
          style={{
            right: "1.25rem",
            bottom: "6.5rem",
            width: "2.5rem",
            height: "2.5rem",
            backgroundColor: "var(--navy)",
            color: "#fff",
            border: "none",
            borderRadius: "2px",
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(27,94,32,0.25)",
          }}
        >
          <ArrowUp className="w-4 h-4" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
