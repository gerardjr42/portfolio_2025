"use client";
import { HoverEffect } from "@/components/HoverEffect";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "ai-analytics",
    title: "AI-Powered Analytics Dashboard",
    date: "Oct.2024",
    category: "Portfolio",
    type: "Design & Dev",
  },
  {
    id: "eco-ecommerce",
    title: "Eco-Friendly E-commerce Platform",
    date: "Aug.2024",
    category: "Portfolio",
    type: "Dev",
  },
  {
    id: "vr-gallery",
    title: "Virtual Reality Art Gallery",
    date: "Jun.2024",
    category: "Special",
    type: "Design & Dev",
  },
  {
    id: "blockchain-supply",
    title: "Blockchain-based Supply Chain",
    date: "Apr.2024",
    category: "Portfolio",
    type: "Design & Dev",
  },
  {
    id: "iot-hub",
    title: "Smart Home IoT Hub",
    date: "Feb.2024",
    category: "Portfolio",
    type: "Design & Dev",
  },
  {
    id: "ar-navigation",
    title: "Augmented Reality Navigation App",
    date: "Dec.2023",
    category: "Portfolio",
    type: "Design & Dev",
  },
  {
    id: "energy-tracker",
    title: "Sustainable Energy Tracker",
    date: "Oct.2023",
    category: "Special",
    type: "Design & Dev",
  },
  {
    id: "ai-language",
    title: "AI Language Learning Assistant",
    date: "Aug.2023",
    category: "Portfolio",
    type: "Dev",
  },
];

export default function ProjectTimeline() {
  return (
    <div className="min-h-screen bg-[#141415] text-white font-geistMono">
      <div className="container mx-auto px-4 py-24">
        <header className="mb-12">
          <h1 className="text-5xl font-thin mb-2">Project Timeline</h1>
          <p className="text-[#2CAD9E] text-xl">A chronicle of innovation</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-[1fr,3fr] gap-8">
          <aside className="relative hidden md:block">
            <div className="sticky top-12">
              <h2 className="text-[120px] font-thin text-white opacity-20 select-none leading-none">
                2023
                <br />
                2024
              </h2>
            </div>
          </aside>
          <main>
            <div className="space-y-16">
              {projects.map((project) => (
                <Link
                  href={`/projects#${project.id}`}
                  key={project.id}
                  className="group block"
                >
                  <div className="mb-2">
                    <span className="text-sm text-[#2CAD9E]">
                      {project.date} / {project.category} / {project.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-4xl md:text-5xl font-thin group-hover:text-[#2CAD9E] transition-colors duration-300 ease-in-out">
                      {project.title}
                    </h3>
                    <ChevronRight className="w-8 h-8 text-[#2CAD9E] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
      <HoverEffect />
    </div>
  );
}
