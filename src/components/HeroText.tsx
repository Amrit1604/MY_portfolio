import { useScreenSize } from "utils/useWindowDimensions";
import { motion } from "framer-motion";

const HeroText = () => {
  const [isMobile, isTab, isDesktop] = useScreenSize();

  return (
    <div className="text-center md:text-left mb-20 mt-[250px] md:mt-[80px] lg:mt-[120px] relative px-4 md:px-[40px] min-[1139px]:px-0 lg:max-w-[1200px] lg:mx-auto">
      <motion.h1
        className="text-[48px] md:text-[80px] lg:text-[96px] leading-[52px] md:leading-[86px] lg:leading-[104px] md:tracking-[-2.5px] font-extrabold text-white drop-shadow-lg z-50"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Nice to {isTab ? <br /> : null} meet you!{" "}
        {isMobile || isDesktop ? <br /> : null} I&apos;m
        <span
          className="border-b-[6px] border-[#4EE1A0] inline-block"
        >
          {isTab ? <br /> : null} AMRIT JOSHI
        </span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mt-9 md:mt-[60px] sm:w-[500px] sm:mx-auto md:mx-0 text-gray-300 leading-relaxed"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Based in India, I&apos;m a full-stack developer passionate about creating
        impactful, accessible, and scalable digital experiences—from web apps
        to AI-powered solutions.
      </motion.p>

      <motion.button
        className="uppercase font-bold text-lg tracking-[2.5px] py-3 px-6 mt-8 md:mt-[40px] lg:mt-[70px] border-2 border-[#4EE1A0] rounded-2xl text-white hover:bg-[#4EE1A0] hover:text-black transition duration-300 shadow-md"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Contact Me
      </motion.button>
    </div>
  );
};

export default HeroText;
