import Image from "next/image";
import GithubIcon from "images/icon-github.svg";
import FrontendMentorIcon from "images/icon-frontend-mentor.svg";
import LinkedinIcon from "images/icon-linkedin.svg";
import TwitterIcon from "images/icon-twitter.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const socialLinks = [
    { href: "https://github.com/Amrit1604", icon: GithubIcon, label: "GitHub", delay: 0.7 },
    { href: "https://www.frontendmentor.io/profile/your-profile", icon: FrontendMentorIcon, label: "Frontend Mentor", delay: 0.8 },
    { href: "https://www.linkedin.com/in/amrit-joshi-053ab1283", icon: LinkedinIcon, label: "LinkedIn", delay: 0.9 },
    { href: "https://twitter.com/your-profile", icon: TwitterIcon, label: "Twitter", delay: 1.0 },
  ];

  return (
    <motion.nav
      className="py-6 md:py-8 flex flex-col md:flex-row md:justify-between items-center mb-20 md:mb-0 relative glass-dark rounded-full px-8 md:px-12 backdrop-blur-2xl shadow-apple"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-4 md:mb-0"
      >
        <h1 className="text-3xl md:text-4xl font-bold gradient-text-apple">AJ</h1>
      </motion.div>

      <ul className="flex items-center gap-6">
        {socialLinks.map((link, index) => (
          <motion.li
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: link.delay, duration: 0.4, ease: "backOut" }}
            className="group"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 glass-dark rounded-full flex items-center justify-center hover:bg-white/20 transition-apple hover-lift"
              aria-label={link.label}
            >
              <Image
                className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                src={link.icon}
                alt={`${link.label} Icon`}
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
