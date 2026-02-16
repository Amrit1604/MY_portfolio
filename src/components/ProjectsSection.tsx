
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  interface Project {
    name: string;
    skills: string[];
    image: any;
    transition_delay: number;
    link: string;
    description: string;
  }

  const projects = [
    {
      name: "THE-NINE-TAILS-KITCHEN",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: "/images/ninetails.png",
      transition_delay: 0.1,
      link: "https://amrit1604.github.io/THE-NINE-TAILS-KITCHEN/",
      description: "Modern restaurant website with interactive menu",
    },
    {
      name: "REAL ESTATE WITH BIDDING",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: "/images/real.png",
      transition_delay: 0.2,
      link: "https://amrit1604.github.io/REAL_ESTATES-/",
      description: "Property marketplace with real-time bidding",
    },
    {
      name: "AI CHAT BOT",
      skills: ["HTML", "CSS", "JAVASCRIPT", "APIs"],
      image: "/images/chatbot.png",
      transition_delay: 0.3,
      link: "https://amrit1604.github.io/CHAT_BOT/",
      description: "Intelligent chatbot powered by AI",
    },
    {
      name: "PotionMaster2.0",
      skills: ["ReactJS", "HTML", "CSS"],
      image: "/images/caffe.png",
      transition_delay: 0.4,
      link: "https://github.com/Amrit1604/PotionMaster2.0",
      description: "Interactive potion crafting game",
    },
    {
      name: "DocATHome",
      skills: ["ReactJS", "NodeJS", "Express", "MongoDB"],
      image: "/images/taskmaster.png",
      transition_delay: 0.5,
      link: "https://github.com/Amrit1604/DocATHome",
      description: "Healthcare platform for home consultations",
    },
    {
      name: "Discussion Portal",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: "/images/diss.png",
      transition_delay: 0.6,
      link: "https://amrit1604.github.io/discussionapp_2310991604/",
      description: "Community forum for open discussions",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 py-20 lg:py-32 lg:max-w-[1400px] lg:mx-auto" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="gradient-text-apple">Featured Projects</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          A collection of my favorite projects that showcase my skills
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

interface ProjectProps {
  project: {
    name: string;
    skills: string[];
    image: string;
    transition_delay: number;
    link: string;
    description: string;
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: project.transition_delay * 0.1, duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
      className="group relative glass rounded-3xl overflow-hidden hover-lift shadow-apple hover:shadow-apple-lg transition-apple cursor-pointer"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-gray-400 mb-4 font-light">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full text-blue-300 border border-white/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectsSection;
