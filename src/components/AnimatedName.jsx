import { motion } from "framer-motion";

export const AnimatedName = ({ text, className }) => {
  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.span className={className} aria-label={text}>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};
