import Image from "next/image";

import picme from "images/picme.png";
import Rings from "images/rings-pattern.png";
import Circle from "images/circle.png";

import Navbar from "components/Navbar";
import HeroText from "components/HeroText";
import { useScreenSize } from "utils/useWindowDimensions";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isMobile, isTab, isDesktop] = useScreenSize();

  return (
    <div className="max-w-[1110px] mx-auto relative overflow-x-hidden lg:overflow-x-visible">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 3.2,
        }}
      >
        <Image
          className="w-[530px] h-[129px] absolute top-[124px] -left-2/4 md:-left-[270px] md:top-[96px] lg:top-[120px]"
          placeholder="blur"
          src={Rings}
          alt="Rings"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.4,
        }}
      >
        <Image
          className="w-[129px] h-[129px] absolute top-[254px] -right-[64.5px] z-10 md:bottom-[80px] md:top-auto lg:top-[529px] lg:bottom-auto lg:right-[380px]"
          placeholder="blur"
          src={Circle}
          alt="Circle"
        />
      </motion.div>

      {/* Profile Image for Mobile */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 3.6,
        }}
      >
        {isMobile && (
          <Image
            className="absolute top-[100px] right-2/4 translate-x-2/4 w-[174px]" // Adjusted top position
            src={picme}
            alt="Profile Image Mobile"
            placeholder="blur"
          />
        )}
      </motion.div>

      {/* Profile Image for Tablet */}
      <motion.div
        className="absolute top-[150px] right-0 w-[322px] h-full" // Adjusted top position for tablet
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 3.4,
        }}
      >
        {isTab && (
          <Image
            src={picme}
            alt="Profile Image Tablet"
            placeholder="blur"
          />
        )}
      </motion.div>

      {/* Profile Image for Desktop */}
      <motion.div
        className="absolute top-0 right-0 w-[445px] h-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 3.4,
        }}
      >
        {isDesktop && (
          <Image
            src={picme}
            alt="Profile Image Desktop"
            placeholder="blur"
          />
        )}
      </motion.div>

      <Navbar />
      <HeroText />
    </div>
  );
};

export default HeroSection;
