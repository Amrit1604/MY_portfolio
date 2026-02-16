import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const StatsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const stats = [
    { label: "Years Experience", value: 3, suffix: "+", icon: "📅" },
    { label: "Projects Completed", value: 25, suffix: "+", icon: "🚀" },
    { label: "Technologies", value: 15, suffix: "+", icon: "⚡" },
    { label: "Coffee Cups", value: 500, suffix: "+", icon: "☕" },
  ];

  return (
    <div ref={ref} className="px-4 md:px-8 lg:px-16 py-20 lg:py-32 lg:max-w-[1400px] lg:mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="gradient-text-apple">By The Numbers</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Achievements that define my journey
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} controls={controls} />
        ))}
      </div>
    </div>
  );
};

interface StatCardProps {
  stat: { label: string; value: number; suffix: string; icon: string };
  index: number;
  controls: any;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index, controls }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass rounded-3xl p-8 text-center hover-lift shadow-apple hover:shadow-apple-lg transition-apple"
    >
      <div className="text-5xl mb-4">{stat.icon}</div>
      <div className="text-4xl md:text-5xl font-bold gradient-text-apple mb-2">
        {count}{stat.suffix}
      </div>
      <p className="text-gray-400 font-light">{stat.label}</p>
    </motion.div>
  );
};

export default StatsSection;
