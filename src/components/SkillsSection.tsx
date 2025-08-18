import { useEffect, useRef } from "react";
import Image from "next/image";
import Rings from "images/rings-pattern.png";
import { useAnimation, useInView, motion } from "framer-motion";

const SkillsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const technicalSkills = [
    {
      name: "Languages",
      experience: "C, C++, Java, Python",
      transition_delay: 0.1,
    },
    {
      name: "Web",
      experience: "HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, LAMP Stack",
      transition_delay: 0.2,
    },
    {
      name: "Backend",
      experience: "REST APIs, MongoDB, JSON handling, Auth/Session control",
      transition_delay: 0.3,
    },
    {
      name: "AI & ML",
      experience: "Working with Large Language Models (LLMs), Deep Reinforcement Learning (DRLs)",
      transition_delay: 0.35,
    },
    {
      name: "Tools",
      experience: "Git, GitHub, Linux, Shell Scripting, VS Code, Postman",
      transition_delay: 0.4,
    },
    {
      name: "Systems",
      experience: "Secure login systems, Bash CGI scripting, Docker basics",
      transition_delay: 0.5,
    },
    {
      name: "AI & Productivity",
      experience: "Leverage AI tools for automation, optimization, and workflow efficiency",
      transition_delay: 0.6,
    },
  ];

  const nonTechnicalSkills = [
    {
      name: "Organization & Deadlines",
      experience: "Skilled in organizing tasks, setting priorities, and meeting deadlines efficiently",
      transition_delay: 0.7,
    },
    {
      name: "Efficiency & Workflows",
      experience: "Efficient in managing time, optimizing workflows, and leveraging AI tools for productivity",
      transition_delay: 0.8,
    },
    {
      name: "Communication",
      experience: "Strong verbal and written communication skills for teamwork and knowledge sharing",
      transition_delay: 0.9,
    },
  ];

  const renderSkills = (skills) => (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-12 md:gap-y-[70px] gap-x-10 my-[60px]">
      {skills.map((skill, idx) => (
        <motion.div
          key={idx}
          className="justify-self-center md:justify-self-start text-center md:text-left bg-gray-900 text-white shadow-lg rounded-2xl p-8 border border-gray-700 hover:border-indigo-400 hover:shadow-indigo-500/40 transition duration-300"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ delay: skill.transition_delay, duration: 0.5 }}
        >
          <h1 className="text-[30px] md:text-4xl font-bold text-indigo-400 mb-4">
            {skill.name}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">{skill.experience}</p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="px-4 md:px-[30px] min-[1139px]:px-0 lg:mt-[150px] lg:max-w-[1200px] lg:mx-auto relative overflow-x-clip 2xl:overflow-visible">
      <Image
        className="w-[265px] md:w-[530px] h-[129px] absolute -bottom-[64.5px] -right-[75px] md:-right-[265px] min-[1139px]:-right-0 min-[1680px]:-right-[265px] opacity-20"
        placeholder="blur"
        src={Rings}
        alt="Rings"
      />
      <motion.hr
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="border-gray-700"
      ></motion.hr>

      {/* Technical Skills */}
      <h2 className="text-4xl md:text-5xl font-extrabold mt-[70px] mb-[40px] text-center md:text-left text-white">
        Technical Skills
      </h2>
      {renderSkills(technicalSkills)}

      {/* Non-Technical Skills */}
      <h2 className="text-4xl md:text-5xl font-extrabold mt-[70px] mb-[40px] text-center md:text-left text-white">
        Non-Technical Skills
      </h2>
      {renderSkills(nonTechnicalSkills)}
    </div>
  );
};

export default SkillsSection;
