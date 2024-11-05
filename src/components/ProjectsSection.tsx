import React from "react";


import Button from "components/Button"; // Assuming you have a Button component

const ProjectsSection = () => {
  interface Project {
    name: string;
    skills: string[];
    image: any; // Change to string for image paths
    transition_delay: number;
    link: string; // Added link property
  }

  const projects: Project[] = [
    {
      name: "THE-NINE-TAILS-KITCHEN",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: "/images/ninetails.png", // Directly use the path from the public folder
      transition_delay: 0.1,
      link: "https://amrit1604.github.io/THE-NINE-TAILS-KITCHEN/",
    },
    {
      name: "REAL ESTATE WEBSITE WITH BIDDING",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: "/images/real.png", // Directly use the path from the public folder
      transition_delay: 0.2,
      link: "https://amrit1604.github.io/REAL_ESTATES-/", // Replace with actual link
    },
    {
      name: "TASKMASTER APP",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: "/images/taskmaster.png", // Directly use the path from the public folder
      transition_delay: 0.3,
      link: "https://amrit1604.github.io/admin_employee/", // Replace with actual link
    },
    {
      name: "TIC-TAC-TOE",
      skills: ["REACTJS"],
      image: "/images/tic.png", // Directly use the path from the public folder
      transition_delay: 0.4,
      link: "https://amrit1604.github.io/tic-tac-toe/", // Replace with actual link
    },
    {
      name: "NUM GUESS GAME",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: "/images/num.png", // Directly use the path from the public folder
      transition_delay: 0.5,
      link: "https://amrit1604.github.io/numguess_game_2310991604/", // Replace with actual link
    },
    {
      name: "DISCUSSION PORTAL",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: "/images/diss.png", // Directly use the path from the public folder
      transition_delay: 0.6,
      link: "https://amrit1604.github.io/discussionapp_2310991604/", // Replace with actual link
    },
    {
      name: "CHAT BOT",
      skills: ["HTML", "CSS", "JAVASCRIPT", "APIs"],
      image: "/images/chatbot.png", // Directly use the path from the public folder
      transition_delay: 0.6,
      link: "https://amrit1604.github.io/CHAT_BOT/", // Replace with actual link
    },
    {
      name: "CAFFE SHOP",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      image: "/images/caffe.png", // Directly use the path from the public folder
      transition_delay: 0.6,
      link: "https://amrit1604.github.io/caffeshop_2310991604/", // Replace with actual link
    },
  ];

  return (
    <div className="py-[70px] lg:py-[110px] px-4 md:px-[30px] min-[1139px]:px-0 lg:max-w-[1110px] lg:mx-auto">
      <div className="flex justify-between items-center mb-10 md:mb-[80px]">
        <h1 className="text-[40px] md:text-7xl lg:text-[88px] font-bold">Projects</h1>
        <Button text="contact me" />
      </div>

      <div className="grid md:grid-cols-2 gap-y-[40px] md:gap-y-[60px] md:gap-x-6 lg:gap-x-[30px]">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

// Correcting typing for `project` prop in Project component
interface ProjectProps {
  project: {
    name: string;
    skills: string[];
    image: string;  // Make sure it's a string for image path
    transition_delay: number;
    link: string;
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  if (!project) {
    return null; // Prevents rendering if the project data is not available
  }

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <img src={project.image} alt={project.name} className="w-full h-auto" />
      <div className="p-4 bg-[#242424] text-white">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="text-sm">{project.skills.join(", ")}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block bg-[#FFD700] text-black font-semibold py-2 px-4 rounded hover:bg-[#e6c200] transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
};


export default ProjectsSection;
