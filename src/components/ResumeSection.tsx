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

        {/* Image of the resume */}
        <div className="mb-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="/resumepic.png" // Adjust this to the actual name of your image
            alt="Resume Preview"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            }}
          />
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
