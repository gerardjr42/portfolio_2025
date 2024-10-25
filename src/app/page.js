"use client";

import { AnimatedName } from "@/components/AnimatedName";
import { StarField } from "@/components/StarField";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { useAudio } from "../hooks/useAudio";

export default function Homepage() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { play: playClickSound, isLoaded: isClickSoundLoaded } = useAudio(
    "/sounds/mouse-click.mp3",
    0.5
  );

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const handleEnterButtonClick = () => {
    if (soundEnabled && isClickSoundLoaded) playClickSound();
    // Add any additional logic for when the ENTER button is clicked
  };

  return (
    <div className="relative min-h-screen bg-[#141415] text-white overflow-hidden font-helvetica ">
      <StarField count={200} />

      {/* Main content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold tracking-wider text-white font-playfair">
            <AnimatedName text="Gerardo" />
            <br />
            <AnimatedName text="Garcia" />
          </h1>
          <motion.p
            className="max-w-md mx-auto text-base text-[#2DD4BF]/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            An innovative AI Software Engineer, with a passion to merge tech and
            science
          </motion.p>
        </div>

        {/* Enter button with hover effect and sound */}
        <motion.div
          className="mt-8 relative w-32 h-32"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1.8,
          }}
        >
          <button
            className="absolute inset-0 rounded-full bg-[#141415] text-white flex items-center justify-center transition-all duration-300 border-2 border-white hover:border-[#2DD4BF]/70"
            onClick={handleEnterButtonClick}
          >
            ENTER
          </button>
        </motion.div>
      </motion.div>

      {/* Sound toggle */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <button
          onClick={toggleSound}
          className="text-white hover:text-[#2DD4BF] mb-2"
        >
          {soundEnabled ? (
            <Volume2 className="w-6 h-6" />
          ) : (
            <VolumeX className="w-6 h-6" />
          )}
        </button>
        <p className="text-xs uppercase text-[#2DD4BF] text-center">
          [Enter the experience {soundEnabled ? "with" : "without"} sound]
        </p>
      </motion.div>
    </div>
  );
}
