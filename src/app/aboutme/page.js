"use client";

import { HoverEffect } from "@/components/HoverEffect";
import { ShootingStarField } from "@/components/ShootingStarField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Activity, Book, Newspaper, Users } from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/garciajrgerardo",
      ariaLabel: "LinkedIn Profile",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <rect width="24" height="24" rx="2" fill="#0A66C2" />
          <path
            d="M20.47 2H3.53a1.45 1.45 0 00-1.47 1.43v17.14A1.45 1.45 0 003.53 22h16.94a1.45 1.45 0 001.47-1.43V3.43A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 110-3.12 1.57 1.57 0 110 3.12zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0012.85 13a2 2 0 00-.1.73v5h-3v-9h3v1.17a3 3 0 012.71-1.54c2 0 3.45 1.29 3.45 4.06v5.31z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      href: "https://github.com/gerardjr42",
      ariaLabel: "GitHub Profile",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <rect width="24" height="24" rx="4" fill="#24292e" />
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      href: "https://gerardogarciajr.substack.com",
      ariaLabel: "Substack Newsletter",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <rect width="24" height="24" rx="4" fill="#FF6719" />
          <path
            d="M6 19v-9h12v9l-6-3.75L6 19zm0-11h12V6H6v2zm0-4h12V4H6v2z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  const activities = [
    {
      title: "Family",
      icon: <Users className="w-5 h-5" />,
      description:
        "When I'm not immersed in coding, you'll find me cherishing moments with my beloved furry companions, Solin, my 13-year-old Bichon Frise, and Sana, my energetic 4-month-old Australian Shepherd pup. They fill my days with boundless joy and heartwarming companionship. We love exploring the beauty of Prospect Park on our walks and occasionally venture on exciting hikes together, creating unforgettable memories along the way.",
    },
    {
      title: "Running",
      icon: <Activity className="w-5 h-5" />,
      description:
        "I took up running when the pandemic hit. Initially, I didn't find it enjoyable, but it became my sole outdoor activity for finding peace. Over time, I developed a deep passion for it. There's a special kind of magic in a long-distance run: I leave behind my daily concerns and become one with my body, feeling as free as a child.",
    },
    {
      title: "Reading",
      icon: <Book className="w-5 h-5" />,
      description:
        "Reading has always been a cherished pastime of mine, offering a gateway to profound knowledge and intellectual exploration. My reading preferences lean towards the captivating realms of psychology and philosophy, where I find solace and enlightenment. Presently, my focus is dedicated to the absorbing world of Carl Jung's Black books, where I am captivated by the intricate layers of his thoughts and the profound wisdom they hold.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#141415] text-white font-geistMono">
      <ShootingStarField count={5} />
      <div className="container mx-auto px-4 py-24">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-thin ">About Me</h1>
          <p className="text-[#2CAD9E] text-xl mb-2">
            Coder. Runner. Reader. Dog Lover.
          </p>

          <div className="flex space-x-4 items-center ">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
              >
                {link.icon}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/document/d/1ShUr_91SVmXhnOmqj1JDLjIS0rrr_dBybDYwDPjPsfk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[#2CAD9E] hover:underline"
            >
              View Resume →
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
              <Card className="bg-[#1c1c1d] text-white border-none">
                <CardHeader>
                  <CardTitle className="text-3xl font-thin flex items-center">
                    <Newspaper className="mr-2 w-6 h-6" />
                    My Substack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    I share my thoughts and insights on various topics through
                    my Substack newsletter. It&apos;s a space where I explore
                    ideas, share experiences, and connect with like-minded
                    individuals.
                  </p>
                  <Button asChild variant="link" className="p-0 text-[#2CAD9E]">
                    <Link
                      href="https://gerardogarciajr.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check out my Substack →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.section>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-thin mb-4 text-[#2CAD9E]">
                What I&apos;m doing when I&apos;m not coding
              </h2>
              <div className="space-y-8">
                {activities.map((activity, index) => (
                  <Card
                    key={index}
                    className="bg-[#1c1c1d] text-white border-none"
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl font-thin flex items-center">
                        {activity.icon}
                        <span className="ml-2">{activity.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{activity.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>
          </main>
        </div>
      </div>
      <HoverEffect />
    </div>
  );
}
