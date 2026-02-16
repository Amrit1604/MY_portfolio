import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Timeline = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const experiences = [
    {
      year: "2024 - Present",
      title: "Full-Stack Developer",
      company: "Freelance",
      description: "Building scalable web applications with React, Next.js, and Node.js. Implementing AI-powered solutions and modern UX patterns.",
      icon: "💼",
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2023 - 2024",
      title: "Software Development Intern",
      company: "Tech Company",
      description: "Developed RESTful APIs, worked with MongoDB databases, and created responsive front-end interfaces.",
      icon: "🚀",
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2022 - 2023",
      title: "Web Developer",
      company: "Personal Projects",
      description: "Built 15+ projects including e-commerce platforms, chat applications, and real estate websites with bidding systems.",
      icon: "💻",
      color: "from-green-500 to-teal-500",
    },
  ];

  const education = [
    {
      year: "2021 - 2025",
      title: "Bachelor in Computer Science",
      company: "University",
      description: "Specialized in Software Engineering, Data Structures, Algorithms, and AI/ML technologies.",
      icon: "🎓",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 py-20 lg:py-32 lg:max-w-[1400px] lg:mx-auto" id="timeline">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="gradient-text-apple">My Journey</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Experience and education that shaped my path
        </p>
      </motion.div>

      <div ref={ref} className="space-y-16">
        {/* Experience Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
            💼 Experience
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  index={index}
                  isLeft={index % 2 === 0}
                  controls={controls}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
            🎓 Education
          </h3>
          <div className="relative">
            <div className="space-y-12">
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  index={experiences.length + index}
                  isLeft={true}
                  controls={controls}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  item: {
    year: string;
    title: string;
    company: string;
    description: string;
    icon: string;
    color: string;
  };
  index: number;
  isLeft: boolean;
  controls: any;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLeft, controls }) => {
  return (
    <motion.div
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: isLeft ? -50 : 50 },
      }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`flex items-center gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:w-full`}
    >
      {/* Content */}
      <div className={`glass rounded-3xl p-6 md:w-[calc(50%-4rem)] w-full hover-lift shadow-apple hover:shadow-apple-lg transition-apple group`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
            {item.icon}
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-400 mb-1">{item.year}</div>
            <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
            <p className="text-blue-400 font-medium mb-2">{item.company}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:block w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 ring-4 ring-white/10 flex-shrink-0" />

      {/* Spacer for opposite side */}
      <div className="hidden md:block md:w-[calc(50%-4rem)]" />
    </motion.div>
  );
};

export default Timeline;
