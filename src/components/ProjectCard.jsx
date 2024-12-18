import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project, isExpanded, toggleProject }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="group block bg-[#1c1c1d] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="mb-4">
      <span className="text-sm text-[#2CAD9E]">
        {project.date} / {project.category} / {project.type}
      </span>
    </div>
    <div
      className="flex items-center justify-between mb-4 cursor-pointer"
      onClick={() => toggleProject(project.id)}
    >
      <h3 className="text-3xl md:text-4xl font-thin group-hover:text-[#2CAD9E] transition-colors duration-300 ease-in-out">
        {project.title}
      </h3>
      <button
        onClick={() => toggleProject(project.id)}
        className="focus:outline-none"
      >
        {isExpanded ? (
          <ChevronDown className="w-6 h-6 text-[#2CAD9E]" />
        ) : (
          <ChevronRight className="w-6 h-6 text-[#2CAD9E] opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </button>
    </div>
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-[#2CAD9E] text-black px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span
              className={`text-sm ${
                project.status === "Completed"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              {project.status}
            </span>
            <div className="flex gap-4">
              {project.repoLink && (
                <Link
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2CAD9E] hover:underline flex items-center"
                >
                  Github Repo <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              )}
              {project.siteLink && (
                <Link
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2CAD9E] hover:underline flex items-center"
                >
                  Visit Site <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default ProjectCard;
