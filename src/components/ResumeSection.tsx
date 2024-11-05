// components/ResumeSection.jsx
import React from "react";
import { useEffect, useState } from "react";

const ResumeSection = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the drop animation after the component mounts
    const timer = setTimeout(() => {
      setShow(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#242424] py-[60px] lg:py-[84px] px-4 md:px-[30px] min-[1139px]:px-0">
      <div className="lg:max-w-[1110px] lg:mx-auto text-center">
        <h2 className="text-[40px] md:text-5xl lg:text-[88px] font-bold mb-5 md:mb-6 lg:mb-9 text-[#FFD700]">
          Resume
        </h2>
        <p className="text-base md:text-lg mb-5 text-gray-300">
          Download my resume to learn more about my education, experience, and skills.
        </p>

        {/* Image of the resume with animation */}
        <div className="mb-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="/resumepic.png" // Replace with the actual path to your resume image
            alt="Resume Preview"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: show ? '0 0 20px rgba(255, 215, 0, 0.8)' : 'none', // Glowing shadow
              transition: 'box-shadow 0.3s ease', // Smooth transition for shadow
              transform: show ? 'translateY(0)' : 'translateY(-20px)', // Drop animation
              opacity: show ? 1 : 0, // Fade-in effect
              transition: 'transform 0.5s ease, opacity 0.5s ease', // Animation duration for drop and fade
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
