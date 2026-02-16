import Image from "next/image";
import picme from "images/picme.png";
import Rings from "images/rings-pattern.png";
import Circle from "images/circle.png";
import Navbar from "components/Navbar";
import HeroText from "components/HeroText";
import { useScreenSize } from "utils/useWindowDimensions";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const [isMobile, isTab, isDesktop] = useScreenSize();
  const { scrollY } = useScroll();

  // Parallax effects
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const yImage = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="max-w-[1400px] mx-auto relative overflow-hidden px-4 md:px-8 lg:px-16 py-8">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 0.1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        style={{ y: yBg, opacity }}
      >
        <Image
          className="w-[530px] h-[129px] absolute top-[124px] -left-[270px] md:-left-[200px] lg:top-[120px] opacity-20"
          placeholder="blur"
          src={Rings}
          alt="Rings"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Image
          className="w-[129px] h-[129px] absolute top-[400px] -right-[64.5px] z-10 lg:top-[529px] lg:right-[380px] opacity-30"
          placeholder="blur"
          src={Circle}
          alt="Circle"
        />
      </motion.div>

      {/* Profile Image with Apple-style presentation */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          style={{ y: yImage }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-[200px] absolute top-[100px] right-2/4 translate-x-2/4 rounded-full overflow-hidden ring-4 ring-white/10 z-20"
        >
          <Image
            src={picme}
            alt="Profile Image"
            placeholder="blur"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      )}

      {isTab && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ y: yImage }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-[322px] absolute top-[150px] right-0 rounded-3xl overflow-hidden ring-4 ring-white/10 z-20"
        >
          <Image
            src={picme}
            alt="Profile Image"
            placeholder="blur"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      )}

      {isDesktop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ y: yImage }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-[445px] absolute top-0 right-0 rounded-3xl overflow-hidden ring-4 ring-white/10 shadow-apple-lg z-20"
        >
          <Image
            src={picme}
            alt="Profile Image"
            placeholder="blur"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      )}

      <Navbar />
      <HeroText />
    </div>
  );
};

export default HeroSection;
