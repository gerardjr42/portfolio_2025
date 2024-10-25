"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-50 w-full bg-transparent bg-opacity-60 text-white">
      {/* Headphones recommendation */}
      <motion.div
        className="absolute top-4 left-4 flex items-center space-x-2 align-middle justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Headphones className="w-4 h-4" />
        <span className="text-xs uppercase">
          Use your headphones for the best experience
        </span>
      </motion.div>
      <ul className="mx-auto my-2 flex w-full items-center justify-center space-x-2 text-center align-middle sm:space-x-4">
        <li className="text-white text-opacity-100 transition duration-300 ease-in-out hover:text-[#2DD4BF] hover:text-opacity-90 hover:underline hover:underline-offset-4">
          <Link href="/about">About Me</Link>
        </li>
        <span>/</span>
        <li className="text-white text-opacity-100 transition duration-300 ease-in-out hover:text-[#2DD4BF] hover:text-opacity-90 hover:underline hover:underline-offset-4">
          <Link href="/projects">Projects</Link>
        </li>
        <span>/</span>
        <li className="text-white text-opacity-100 transition duration-300 ease-in-out hover:text-[#2DD4BF] hover:text-opacity-90 hover:underline hover:underline-offset-4">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
