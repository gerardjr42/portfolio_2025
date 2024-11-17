import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ShootingStar = ({ x, y, size, duration }) => (
  <motion.div
    className="absolute rounded-full bg-white pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
    }}
    initial={{ opacity: 0, x: -100, y: -100 }}
    animate={{
      opacity: [0, 1, 0],
      x: [0, 100],
      y: [0, 100],
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatDelay: 4, // 4 seconds delay between animations
      ease: "linear",
    }}
    aria-hidden="true"
    tabIndex="-1"
  />
);

export const ShootingStarField = ({ count = 5 }) => {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 2 + 1,
    }));
  };

  useEffect(() => {
    setStars(generateStars());
  }, [count]);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {stars.map((star, index) => (
          <ShootingStar key={index} {...star} />
        ))}
      </motion.div>
    </div>
  );
};
