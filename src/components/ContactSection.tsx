import React, { useState } from "react";
import Image from "next/image";
import Rings from "images/rings-pattern.png";
import Footer from "components/Footer";
import Button from "components/Button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("Sending...");

    // Prepare form data
    const formPayload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      access_key: "e3d04b64-9f15-4fe0-b60b-6edd806e0a34", // Replace with your Web3 Form API Key
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();
      if (result.success) {
        setStatusMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });  // Clear form on success
      } else {
        setStatusMessage("There was an error sending your message.");
      }
    } catch (error) {
      setStatusMessage("Error: Could not send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#242424] py-[60px] lg:py-[84px] px-4 md:px-[30px] min-[1139px]:px-0">
      <div className="lg:max-w-[1110px] lg:mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:justify-between pb-[87px] gap-y-[50px] lg:gap-y-0 sm:w-[445px] lg:w-auto sm:mx-auto">
          <div className="lg:w-[450px] text-center lg:text-left relative">
            <Image
              className="w-[530px] h-[129px] absolute bottom-[200px] md:bottom-[100px] lg:bottom-[110px] -left-2/4 md:-left-[390px] lg:-left-[370px]"
              placeholder="blur"
              src={Rings}
              alt="Rings"
            />
            <h1 className="text-[40px] md:text-7xl lg:text-[88px] font-bold mb-5 md:mb-6 lg:mb-9">
              Contact
            </h1>
            <p className="text-base md:text-lg mb-5">
              I would love to hear about your project and how I could help. 
              Feel free to reach out directly or fill in the form, and i will get 
              back to you as soon as possible.
            </p>
            {/* Contact Details */}
            <p className="text-base md:text-lg">
              <strong>Email:</strong> <a href="mailto:amritjoshi2004@gmail.com" className="text-[#FFD700]">amritjoshi2004@gmail.com</a><br />
              <strong>Phone:</strong> <span className="text-[#FFD700]">+91 95015 80144</span>
            </p>
          </div>

          {/* Contact Form */}
          <form className="w-full lg:w-auto" onSubmit={handleSubmit}>
            <div>
              <input
                className="outline-none w-full lg:w-[445px] px-6 mb-8 pb-4 bg-transparent border-b-2 border-b-[#979797]"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="NAME"
                required
              />
            </div>
            <div>
              <input
                className="outline-none w-full lg:w-[445px] px-6 mb-8 pb-4 bg-transparent border-b-2 border-b-[#979797]"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL"
                required
              />
            </div>
            <div>
              <textarea
                className="outline-none w-full lg:w-[445px] px-6 mb-4 bg-transparent border-b-2 border-b-[#979797]"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="MESSAGE"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button text={isSubmitting ? "Sending..." : "Send Message"}  />
            </div>
            {statusMessage && <p className="text-center mt-4 text-sm text-[#FFD700]" aria-live="polite">{statusMessage}</p>}
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactSection;
