"use client";

import { useLoading } from "@/contexts/LoadingContext";
import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { SoundContext } from "../contexts/SoundContext";
import { useAudio } from "../hooks/useAudio";

export default function Navbar() {
  const { isLoading } = useLoading();
  const playClickSound = useAudio("/sounds/mouse-click.mp3", 0.5);
  const { soundEnabled, toggleSound } = useContext(SoundContext);

  const handleNavClick = (e) => {
    playClickSound();
  };

  if (isLoading) {
    return null;
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed z-50 w-full bg-transparent bg-opacity-60 text-white"
    >
      {/* Headphones recommendation */}
      <motion.div
        className="absolute top-4 left-4 items-center space-x-2 align-middle justify-center sm:flex hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <button onClick={toggleSound} className="flex items-center space-x-2">
          <Headphones className="w-4 h-4" />
          <span className="text-xs uppercase">
            {soundEnabled ? "Sound On" : "Sound Off"}
          </span>
        </button>
      </motion.div>
      <ul className="mx-auto my-2 flex w-full items-center justify-center space-x-2 text-center align-middle sm:space-x-4">
        <li className="text-white text-opacity-100 transition duration-300 ease-in-out hover:text-[#2DD4BF] hover:text-opacity-90 hover:underline hover:underline-offset-4">
          <Link href="/" onClick={handleNavClick}>
            Home
          </Link>
        </li>
        <span>/</span>
        <li className="text-white text-opacity-100 transition duration-300 ease-in-out hover:text-[#2DD4BF] hover:text-opacity-90 hover:underline hover:underline-offset-4">
          <Link href="/aboutme" onClick={handleNavClick}>
            About Me
          </Link>
        </li>
        <span>/</span>
        <li className="text-white text-opacity-100 transition duration-300 ease-in-out hover:text-[#2DD4BF] hover:text-opacity-90 hover:underline hover:underline-offset-4">
          <Link href="/projects" onClick={handleNavClick}>
            Projects
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
