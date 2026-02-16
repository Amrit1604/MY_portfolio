import React from "react";
import { motion } from "framer-motion";

const ResumeSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-20 lg:py-32 lg:max-w-[1400px] lg:mx-auto" id="resume">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="gradient-text-apple">Resume</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light mb-12">
          Download my resume to explore my education, experience, and technical expertise
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto glass rounded-3xl p-8 shadow-apple-lg hover:shadow-apple-lg hover-lift transition-apple"
        >
          <div className="relative mb-8 rounded-2xl overflow-hidden">
            <img
              src="/resumepic.png"
              alt="Resume Preview"
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>

          <a
            href="/amritresume.pdf"
            download="Amrit_Joshi_Resume.pdf"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-full hover:shadow-apple-lg transition-apple"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Resume</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResumeSection;
