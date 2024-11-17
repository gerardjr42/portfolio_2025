"use client";
import { HoverEffect } from "@/components/HoverEffect";
import { ShootingStarField } from "@/components/ShootingStarField";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: "brain-tumor-classification",
    title: "Brain Tumor Classification with Neural Networks",
    date: "Nov.2024",
    category: "Computer Vision",
    type: "Machine Learning Application",
    description:
      "This project focuses on developing neural network models to classify brain tumors in MRI scans. It involves constructing various architectures using transfer learning and custom convolutional layers. Additionally, the Gemini 1.5 Flash model will be utilized to provide detailed explanations for the predictions.",
    techStack: [
      "Python",
      "Computer Vision",
      "Neural Networks",
      "Gemini 1.5 Flash",
      "Transfer Learning",
    ],
    status: "In Progress",
  },
  {
    id: "convex-chatverse",
    title: "Convex ChatVerse",
    date: "Nov.2024",
    category: "Web Development",
    type: "Full-Stack Application",
    description:
      "Convex ChatVerse is a real-time communication platform built with modern web technologies. It allows users to create servers, add friends, and engage in text and video communication. This project aims to provide a seamless and interactive user experience for online communities.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn/UI",
      "Convex",
      "LiveKit",
      "Clerk",
      "Lucide React",
      "Sonner",
    ],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/Discord_Clone",
    siteLink: "https://convex-chatverse.vercel.app/",
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction App",
    date: "Oct.2024",
    category: "Data Science",
    type: "Machine Learning Application",
    description:
      "This Streamlit application predicts customer churn for a bank using various machine learning models. It provides an interactive interface for selecting customers, viewing their details, and getting predictions on their likelihood to churn. The app also generates explanations for the predictions and personalized emails for customer retention. Models used include XGBoost, Random Forest, Support Vector Machine, K-Nearest Neighbors, Naive Bayes, and Decision Tree.",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Plotly",
      "OpenAI",
      "Google Colab",
      "Streamlit",
    ],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/Churning_ML_Project",
    siteLink: "https://churning-project.streamlit.app/",
  },
  {
    id: "local-community",
    title: "Locally: Connect with Your Local Community",
    date: "Sept.2024",
    category: "Web Development",
    type: "Full-Stack Application",
    description:
      "Discover events, meet friends, and create lasting memories in your neighborhood. Join Locally and start exploring what's happening around you.",
    techStack: [
      "Next.js",
      "Supabase",
      "TensorFlow.js",
      "Universal Sentence Encoder",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "GSAP",
    ],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/Locally",
    siteLink: "https://locally.vercel.app/",
  },
  {
    id: "chat-bot",
    title: "Serenify: Your Personal AI Therapist",
    date: "Aug.2024",
    category: "Web Development",
    type: "Full-Stack Application",
    description:
      "24/7 support, personalized guidance, and a judgment-free space for your mental wellness journey.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Material-UI",
      "openAI API",
      "Clerk",
      "Spline",
    ],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/Serenify-AI",
    siteLink: "https://serenify-ai.vercel.app/",
  },
  {
    id: "pantry-tracker",
    title: "Pantry Tracker: Smart Inventory Management",
    date: "Aug.2024",
    category: "Web Development",
    type: "Full-Stack Application",
    description:
      "Developed an innovative application that uses image recognition to identify items and includes a full CRUD implementation for seamless data management. Additionally, the app features a recipe recommendation system that suggests recipes based on the user's inventory.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Material-UI",
      "openAI API",
      "Firebase",
    ],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/pantry_app",
    siteLink: "https://pantry-app-gilt.vercel.app/",
  },
  {
    id: "airbnb-tips-prediction",
    title: "Unsupervised Learning: Airbnb Expected Tips",
    date: "Aug.2024",
    category: "Data Science",
    type: "Unsupervised Learning",
    description:
      "Developed a widget for Airbnb hosts to predict expected tips using unsupervised machine learning. The model analyzes listing features to cluster properties and estimate tip amounts, providing hosts with insights to optimize listings and improve guest satisfaction. The user-friendly interface allows hosts to input details and receive personalized tip predictions based on Airbnb dataset patterns.",
    techStack: [
      "Python",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Jupyter Notebook",
      "Google Colab",
      "Plotly",
      "Streamlit",
    ],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/Airbnb-Unsupervised-Learning",
    siteLink: "https://airbnb-unsupervised-learning.streamlit.app/",
  },
  {
    id: "airbnb-amsterdam-analysis",
    title: "Supervised Learning: Amsterdam Airbnb Price Predictor",
    date: "Aug.2024",
    category: "Data Science",
    type: "Supervised Learning",
    description:
      "Developed a machine learning model to predict Airbnb prices in Amsterdam using supervised learning techniques. The model analyzes various listing features to provide accurate price predictions, helping hosts optimize pricing and guests estimate fair rates. Includes a user-friendly interface for instant predictions and data visualizations for market insights.",
    techStack: [
      "Python",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Jupyter Notebook",
      "Google Colab",
      "Plotly",
      "Streamlit",
    ],
    status: "Completed",
    repoLink:
      "https://github.com/gerardjr42/gerardjr42-airbnb_Amsterdam_scikit-learn",
    siteLink: "https://airbnb-amsterdam-scikit-learn.streamlit.app/",
  },
  {
    id: "airbnb-numpy-analysis",
    title: "Airbnb Nearby Stays Finder with NumPy",
    date: "Aug.2024",
    category: "Data Science",
    type: "Data Analysis",
    description:
      "Developed an efficient algorithm using NumPy to find nearby Airbnb stays in Amsterdam based on geolocation. The project utilizes NumPy's vectorized operations for fast distance calculations, enabling quick discovery of accommodations within a specified radius. This tool enhances the search experience with location-based recommendations, demonstrating NumPy's power in handling large datasets and performing complex geographical computations efficiently.",
    techStack: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Jupyter Notebook",
      "Google Colab",
      "Plotly",
      "Streamlit",
    ],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/Airbnb_Using_AI-ML",
    siteLink: "https://ggerard-airbnb-numpy-ml.streamlit.app/",
  },
  {
    id: "airbnb-pandas-analysis",
    title: "Airbnb Listings Filter using Pandas",
    date: "Aug.2024",
    category: "Data Science",
    type: "Data Analysis",
    description:
      "Developed a data processing pipeline using Pandas to analyze Airbnb listings in Amsterdam. Features include data cleaning, dynamic filtering, statistical analysis, and interactive visualizations. The project culminates in a Streamlit app for exploring insights and comparing listings, aiding in decision-making for Airbnb stays and property management.",
    techStack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Jupyter Notebook",
      "Google Colab",
      "Plotly",
      "Streamlit",
    ],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/Airbnb_Using_AI-ML-Pandas",
    siteLink: "https://ggerard-airbnb-pandas.streamlit.app/",
  },
  {
    id: "portfolio-site",
    title: "Personal Portfolio Website Summer 2024",
    date: "Summer.2024",
    category: "Frontend Development",
    type: "Web Application",
    description:
      "Designed and developed a responsive portfolio website to showcase projects, skills, and professional experience using modern web technologies.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/portfolio_Summer2024",
    siteLink: "https://portfolio-summer2024.vercel.app/",
  },
  {
    id: "budgeting-app",
    title: "Personal Finance Budgeting App",
    date: "July.2024",
    category: "Full Stack Development",
    type: "Web Application",
    description:
      "PERN stack finance app for budget tracking and expense management. Features include transaction labeling (withdrawal/deposit) and editing capabilities.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "Postman",
      "Render",
    ],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/budgeting-app-frontend ",
    siteLink: "https://budget-app-theseus.vercel.app/",
  },
  {
    id: "youtube-mockup",
    title: "YouTube UI Mockup",
    date: "May.2024",
    category: "Frontend Development",
    type: "UI Design & Implementation",
    description:
      "Created a pixel-perfect mockup of the YouTube interface with responsive design in dark mode.",
    techStack: [
      "React",
      "Tailwind CSS",
      "YouTube Data API",
      "Postman",
      "RESTful APIs",
    ],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/youtube-solo-project",
    siteLink: "https://youtube-solo-project.vercel.app/",
  },
  {
    id: "student-dashboard",
    title: "Interactive Student Dashboard",
    date: "Apr.2024",
    category: "Frontend Development",
    type: "React Application",
    description:
      "Designed and implemented an interactive dashboard for students to track assignments, grades, and course progress with data visualization. Added features for peer interaction, allowing students to comment on each other's profiles and share academic insights.",
    techStack: ["React", "Tailwind CSS"],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/project-student-dashboard",
    siteLink: "https://project-student-dashboard.vercel.app/",
  },
  {
    id: "nvim-setup",
    title: "Neovim Development Environment",
    date: "Feb.2024",
    category: "Development Tools",
    type: "Configuration",
    description:
      "Customized Neovim setup with LSP integration, custom keybindings, and productivity plugins for efficient coding across multiple languages.",
    techStack: ["Lua", "Neovim", "LSP", "Treesitter"],
    status: "Completed",
    repoLink: "https://github.com/gerardjr42/Nvim-Config-Setup",
  },
];

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

export default function ProjectTimeline() {
  const [expandedProject, setExpandedProject] = useState(null);

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
