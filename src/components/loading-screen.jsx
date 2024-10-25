"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage < 100) {
          return Math.min(prevPercentage + 2, 100);
        }
        clearInterval(interval);
        return 100;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#141415] text-gray-300 font-mono">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 mb-4 text-[#2DD4BF]"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      <AnimatePresence>
        {percentage === 100 ? (
          <motion.p
            key="complete"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-wider"
          >
            WELCOME_TO_GERARDO&apos;S_WEBSITE
          </motion.p>
        ) : (
          <motion.p
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm tracking-wider"
          >
            LOADING_GERARDO&apos;S_WEBSITE_{percentage}%_
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
