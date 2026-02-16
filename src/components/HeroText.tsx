import { useScreenSize } from "utils/useWindowDimensions";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["Full-Stack Developer", "AI Enthusiast", "Problem Solver", "Tech Innovator"];

const HeroText = () => {
  const [isMobile, isTab, isDesktop] = useScreenSize();
  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(displayedRole.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedRole, roleIndex, isDeleting]);

  return (
    <div className="text-center md:text-left mb-20 mt-[250px] md:mt-[80px] lg:mt-[120px] relative px-4 md:px-[40px] min-[1139px]:px-0 lg:max-w-[1200px] lg:mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        <p className="text-sm md:text-base font-medium tracking-wider uppercase text-blue-400 mb-4 h-6">
          {displayedRole}
          <span className="animate-pulse">|</span>
        </p>
      </motion.div>

      <motion.h1
        className="text-[56px] md:text-[80px] lg:text-[110px] leading-[60px] md:leading-[86px] lg:leading-[110px] font-bold tracking-tight mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        <span className="block text-white">Nice to meet you!</span>
        <span className="block mt-2">
          I&apos;m{" "}
          <span className="gradient-text-apple">
            AMRIT JOSHI
          </span>
        </span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl lg:text-2xl mt-6 md:mt-8 max-w-[650px] mx-auto md:mx-0 text-gray-400 leading-relaxed font-light"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        Based in India, I craft exceptional digital experiences—from scalable web applications to AI-powered solutions.
      </motion.p>

      <motion.div
        className="flex gap-4 mt-10 md:mt-12 justify-center md:justify-start"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        <a
          href="#contact"
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-base overflow-hidden transition-apple hover:shadow-apple-lg"
        >
          <span className="relative z-10">Contact Me</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
        
        <a
          href="#projects"
          className="px-8 py-4 glass rounded-full text-white font-semibold text-base hover:bg-white/10 transition-apple"
        >
          View Work
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
