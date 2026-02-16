import { useEffect, useRef } from "react";
import Image from "next/image";
import Rings from "images/rings-pattern.png";
import { useAnimation, useInView, motion } from "framer-motion";

const SkillsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const technicalSkills = [
    {
      name: "Languages",
      icon: "💻",
      experience: "C, C++, Java, Python",
      transition_delay: 0,
    },
    {
      name: "Web Development",
      icon: "🌐",
      experience: "HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js",
      transition_delay: 0.05,
    },
    {
      name: "Backend & APIs",
      icon: "⚡",
      experience: "REST APIs, MongoDB, JSON handling, Auth/Session control",
      transition_delay: 0.1,
    },
    {
      name: "AI & Machine Learning",
      icon: "🤖",
      experience: "Large Language Models (LLMs), Deep Reinforcement Learning",
      transition_delay: 0.15,
    },
    {
      name: "Developer Tools",
      icon: "🛠️",
      experience: "Git, GitHub, Linux, Shell Scripting, VS Code, Postman",
      transition_delay: 0.2,
    },
    {
      name: "Systems & DevOps",
      icon: "🔧",
      experience: "Secure login systems, Bash CGI scripting, Docker basics",
      transition_delay: 0.25,
    },
  ];

  const nonTechnicalSkills = [
    {
      name: "Organization",
      icon: "📋",
      experience: "Expert task management, priority setting, and deadline execution",
      transition_delay: 0,
    },
    {
      name: "Efficiency",
      icon: "⚙️",
      experience: "Optimized workflows leveraging AI tools for maximum productivity",
      transition_delay: 0.1,
    },
    {
      name: "Communication",
      icon: "💬",
      experience: "Clear communication for seamless teamwork and collaboration",
      transition_delay: 0.2,
    },
  ];

  type Skill = {
    name: string;
    icon: string;
    experience: string;
    transition_delay: number;
  };

  const renderSkills = (skills: Skill[]) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {skills.map((skill: Skill, idx: number) => (
        <motion.div
          key={idx}
          className="group glass hover:glass-dark rounded-3xl p-8 hover-lift shadow-apple hover:shadow-apple-lg transition-apple cursor-pointer"
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ delay: skill.transition_delay, duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }}
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {skill.name}
          </h3>
          <p className="text-base text-gray-400 leading-relaxed font-light">
            {skill.experience}
          </p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="px-4 md:px-8 lg:px-16 py-20 lg:py-32 lg:max-w-[1400px] lg:mx-auto relative overflow-hidden" id="skills">
      <Image
        className="w-[530px] h-[129px] absolute -bottom-[64.5px] -right-[265px] opacity-10 pointer-events-none"
        placeholder="blur"
        src={Rings}
        alt="Rings"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 
          ref={ref}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="gradient-text-apple">Technical Skills</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Crafting digital experiences with cutting-edge technologies
        </p>
      </motion.div>

      {renderSkills(technicalSkills)}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 mt-32"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="gradient-text-apple">Soft Skills</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Beyond code - the human touch that drives success
        </p>
      </motion.div>

      {renderSkills(nonTechnicalSkills)}
    </div>
  );
};

export default SkillsSection;
