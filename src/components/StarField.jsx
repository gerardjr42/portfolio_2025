import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Star = ({ x, y, size, duration }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      x,
      y,
      width: size,
      height: size,
    }}
    initial={{ opacity: 0, scale: 0, z: -1000 }}
    animate={{
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0],
      z: [-1000, 0, 500, 1000],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

export const StarField = ({ count = 100 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth - window.innerWidth / 2,
      y: Math.random() * window.innerHeight - window.innerHeight / 2,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 30 + 10,
    }));
    setStars(newStars);
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
          <Star key={index} {...star} />
        ))}
      </motion.div>
    </div>
  );
};
