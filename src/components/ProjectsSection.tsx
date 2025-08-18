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

  const projects = [
  {
    name: "THE-NINE-TAILS-KITCHEN",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
    image: "/images/ninetails.png",
    transition_delay: 0.1,
    link: "https://amrit1604.github.io/THE-NINE-TAILS-KITCHEN/",
  },
  {
    name: "REAL ESTATE WEBSITE WITH BIDDING",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
    image: "/images/real.png",
    transition_delay: 0.2,
    link: "https://amrit1604.github.io/REAL_ESTATES-/",
  },
  {
    name: "CHAT BOT",
    skills: ["HTML", "CSS", "JAVASCRIPT", "APIs"],
    image: "/images/chatbot.png",
    transition_delay: 0.3,
    link: "https://amrit1604.github.io/CHAT_BOT/",
  },
  {
    name: "PotionMaster2.0",
    skills: ["ReactJS", "HTML", "CSS", "JAVASCRIPT"],
    image: "/images/potionmaster2.png", // UPDATE with actual image path if different
    transition_delay: 0.4,
    link: "https://github.com/Amrit1604/PotionMaster2.0", // Replace with live link if available
  },
  {
    name: "DocATHome",
    skills: ["ReactJS", "NodeJS", "Express", "MongoDB"],
    image: "/images/docathome.png", // UPDATE with actual image path if different
    transition_delay: 0.5,
    link: "https://github.com/Amrit1604/DocATHome", // Replace with live link if available
  },
  {
    name: "NUM GUESS GAME",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
    image: "/images/num.png",
    transition_delay: 0.6,
    link: "https://amrit1604.github.io/numguess_game_2310991604/",
  },
  {
    name: "DISCUSSION PORTAL",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
    image: "/images/diss.png",
    transition_delay: 0.7,
    link: "https://amrit1604.github.io/discussionapp_2310991604/",
  },
  {
    name: "Guess Game",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
    image: "/images/guessgame.png", // UPDATE with actual image path if different
    transition_delay: 0.8,
    link: "https://github.com/Amrit1604/guess-game", // Replace with live link if available
  },
  {
    name: "CHAT-APP",
    skills: ["ReactJS", "NodeJS", "Socket.io"],
    image: "/images/chatapp.png", // UPDATE with actual image path if different
    transition_delay: 0.9,
    link: "https://github.com/Amrit1604/CHAT-APP", // Replace with live link if available
  },
  {
    name: "Loginator-3000",
    skills: ["ReactJS", "NodeJS", "Express"],
    image: "/images/loginator.png", // UPDATE with actual image path if different
    transition_delay: 1.0,
    link: "https://github.com/Amrit1604/Loginator-3000", // Replace with live link if available
  },
  {
    name: "TechZen2.0",
    skills: ["ReactJS", "NodeJS", "MongoDB"],
    image: "/images/techzen2.png", // UPDATE with actual image path if different
    transition_delay: 1.1,
    link: "https://github.com/Amrit1604/TechZen2.0", // Replace with live link if available
  },
  {
    name: "InsureInfo2",
    skills: ["ReactJS", "NodeJS", "Express", "MongoDB"],
    image: "/images/insureinfo2.png", // UPDATE with actual image path if different
    transition_delay: 1.2,
    link: "https://github.com/Amrit1604/InsureInfo2", // Replace with live link if available
  },
  {
    name: "Shopping_cart",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
    image: "/images/shoppingcart.png", // UPDATE with actual image path if different
    transition_delay: 1.3,
    link: "https://github.com/Amrit1604/Shopping_cart", // Replace with live link if available
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
