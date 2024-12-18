"use client";
import { HoverEffect } from "@/components/HoverEffect";
import ProjectCard from "@/components/ProjectCard";
import { ShootingStarField } from "@/components/ShootingStarField";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProjectTimeline() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { projects } = await import("@/app/api/projects/data");
        setProjects(projects);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

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
          <h1 className="text-5xl font-thin mb-2">Project Timeline</h1>
          <p className="text-[#2CAD9E] text-xl">A chronicle of innovation</p>
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
            <div className="space-y-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isExpanded={expandedProject === project.id}
                  toggleProject={toggleProject}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
      <HoverEffect />
    </div>
  );
}
