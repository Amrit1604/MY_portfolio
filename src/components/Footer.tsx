import React from "react";
import Image from "next/image";
import GithubIcon from "images/icon-github.svg";
import FrontendMentorIcon from "images/icon-frontend-mentor.svg";
import LinkedinIcon from "images/icon-linkedin.svg";
import TwitterIcon from "images/icon-twitter.svg";

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/Amrit1604", icon: GithubIcon, label: "GitHub" },
    { href: "https://www.frontendmentor.io/profile/your-profile", icon: FrontendMentorIcon, label: "Frontend Mentor" },
    { href: "https://www.linkedin.com/in/amrit-joshi-053ab1283", icon: LinkedinIcon, label: "LinkedIn" },
    { href: "https://twitter.com/your-profile", icon: TwitterIcon, label: "Twitter" },
  ];

  return (
    <footer className="pt-12 mt-12 border-t border-white/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold gradient-text-apple mb-2">
            Amrit Joshi
          </h3>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        <ul className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-dark rounded-full flex items-center justify-center hover:bg-white/20 transition-apple hover-lift"
                aria-label={link.label}
              >
                <Image
                  className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                  src={link.icon}
                  alt={`${link.label} Icon`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500 font-light">
          Crafted with ❤️ using Next.js, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
