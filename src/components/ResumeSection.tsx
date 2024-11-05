// components/ResumeSection.jsx
import React from "react";

const ResumeSection = () => {
  return (
    <div className="bg-[#242424] py-[60px] lg:py-[84px] px-4 md:px-[30px] min-[1139px]:px-0">
      <div className="lg:max-w-[1110px] lg:mx-auto text-center">
        <h2 className="text-[40px] md:text-5xl lg:text-[88px] font-bold mb-5 md:mb-6 lg:mb-9 text-[#FFD700]">
          Resume
        </h2>
        <p className="text-base md:text-lg mb-5 text-gray-300">
          Download my resume to learn more about my education, experience, and skills.
        </p>

        {/* Optional: Embed the resume or provide a preview here */}
        <div className="mb-5">
          <iframe
            src="/resumepic.png"
            title="Resume Preview"
            style={{ width: '100%', height: '500px', border: 'none' }} // Adjust height as necessary
          ></iframe>
          {/* Or use an image if you have a screenshot of your resume */}
          {/* <img src="/path-to-your-resume-image.jpg" alt="Resume Preview" className="w-full h-auto mb-5" /> */}
        </div>

        <a
          href="/amritresume.pdf"  // Path to your resume in the public directory
          download="amritresume.pdf"
          className="inline-flex items-center bg-[#FFD700] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#e6c200] transition-colors"
        >
          <span className="mr-2">📄</span>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeSection;
