"use client";

import React, { useRef, useState, useEffect } from "react";
import { CmdPane } from "@/components/ComponentsCommand/CmdPane";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isCmdPaneVisible, setIsCmdPaneVisible] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === "k") {
        setIsCmdPaneVisible(true);
      }

      if (event.key === "Escape") {
        setIsCmdPaneVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative flex flex-col gap-6 w-screen h-screen items-center justify-center bg-white antialiased">
      {!isCmdPaneVisible && (
        <p className="text-sm text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>{" "}
          to open command pane.
        </p>
      )}
      <AnimatePresence>
        {isCmdPaneVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, height: 0 }}
            animate={{ opacity: 1, scale: 1, height: "auto" }}
            exit={{ opacity: 0, scale: 0.9, height: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              mass: 1,
            }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-hidden"
          >
            <CmdPane isVisible={isCmdPaneVisible} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
