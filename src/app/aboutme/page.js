"use client";

import { HoverEffect } from "@/components/HoverEffect";
import { motion } from "framer-motion";
import { Activity, Book, Newspaper, Users } from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-[#141415] text-white font-geistMono">
      <div className="container mx-auto px-4 py-24">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-thin mb-2">About Me</h1>
          <p className="text-[#2CAD9E] text-xl">
            Coder. Runner. Reader. Dog Lover.
          </p>
          <Link
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-[#2CAD9E] hover:underline mb-4"
          >
            View Resume →
          </Link>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/garciajrgerardo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10">
                <rect width="24" height="24" rx="2" fill="#0A66C2" />
                <path
                  d="M20.47 2H3.53a1.45 1.45 0 00-1.47 1.43v17.14A1.45 1.45 0 003.53 22h16.94a1.45 1.45 0 001.47-1.43V3.43A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 110-3.12 1.57 1.57 0 110 3.12zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0012.85 13a2 2 0 00-.1.73v5h-3v-9h3v1.17a3 3 0 012.71-1.54c2 0 3.45 1.29 3.45 4.06v5.31z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link
              href="https://github.com/gerardjr42"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <svg viewBox="0 0 50 50" className="w-10 h-10">
                <rect width="50" height="50" rx="10" fill="#24292e" />
                <path
                  d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"
                  fill="#FFFFFF"
                />
              </svg>
            </Link>
            <Link
              href="https://gerardogarciajr.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Substack Newsletter"
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10">
                <rect width="24" height="24" rx="4" fill="#FF6719" />
                <path
                  d="M6 19v-9h12v9l-6-3.75L6 19zm0-11h12V6H6v2zm0-4h12V4H6v2z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </motion.header>
        <div className="grid grid-cols-1 md:grid-cols-[1fr,3fr] gap-8">
          <aside className="relative hidden md:block">
            <div className="sticky top-12">
              <h2 className="text-[120px] font-thin text-white opacity-20 select-none leading-none">
                2024
              </h2>
            </div>
          </aside>
          <main>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-thin mb-4 flex items-center">
                <Newspaper className="mr-2" />
                My Substack
              </h2>
              <p className="mb-4">
                {"I share my thoughts and insights on various topics through my" +
                  "Substack newsletter. It's a space where I explore ideas, share experiences, and connect with like-minded individuals."}
              </p>
              <Link
                href="https://gerardogarciajr.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2CAD9E] hover:underline"
              >
                Check out my Substack →
              </Link>
            </motion.section>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-thin mb-4">
                {"What I'm doing when I'm not coding"}
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-thin mb-2 flex items-center">
                    <Users className="mr-2" />
                    Family
                  </h3>
                  <p>
                    {
                      "When I'm not immersed in coding, you'll find me cherishing moments with my beloved furry companions, Solin, my 13-year-old Bichon Frise, and Sana, my energetic 4-month-old Australian Shepherd pup. They fill my days with boundless joy and heartwarming companionship. We love exploring the beauty of Prospect Park on our walks and occasionally venture on exciting hikes together, creating unforgettable memories along the way."
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-thin mb-2 flex items-center">
                    <Activity className="mr-2" />
                    Running
                  </h3>
                  <p>
                    {
                      "I took up running when the pandemic hit. Initially, I didn't find it enjoyable, but it became my sole outdoor activity for finding peace. Over time, I developed a deep passion for it. There's a special kind of magic in a long-distance run: I leave behind my daily concerns and become one with my body, feeling as free as a child."
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-thin mb-2 flex items-center">
                    <Book className="mr-2" />
                    Reading
                  </h3>
                  <p>
                    {
                      "Reading has always been a cherished pastime of mine, offering a gateway to profound knowledge and intellectual exploration. My reading preferences lean towards the captivating realms of psychology and philosophy, where I find solace and enlightenment. Presently, my focus is dedicated to the absorbing world of Carl Jung's Black books, where I am captivated by the intricate layers of his thoughts and the profound wisdom they hold."
                    }
                  </p>
                </div>
              </div>
            </motion.section>
          </main>
        </div>
      </div>
      <HoverEffect />
    </div>
  );
}
