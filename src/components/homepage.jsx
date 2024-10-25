"use client"

import React, { useState } from 'react'
import { Headphones, Volume2, VolumeX } from 'lucide-react'

export function Homepage() {
  const [soundEnabled, setSoundEnabled] = useState(true)

  const toggleSound = () => setSoundEnabled(!soundEnabled)

  return (
    (<div
      className="relative min-h-screen bg-[#141415] text-white overflow-hidden font-helvetica">
      {/* Headphones recommendation */}
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <Headphones className="w-6 h-6" />
        <span className="text-xs uppercase">Use your headphones for the best experience</span>
      </div>
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold tracking-wider text-white">
            <span className="inline-block">FOLLOWING</span>
            <br />
            <span className="inline-block">WILDFIRE</span>
          </h1>
          <p className="max-w-md mx-auto text-sm text-[#2DD4BF]/80">
            An innovative technology that detects early signs of wildfire in
            real-time social media images
          </p>
        </div>

        {/* Enter button */}
        <button
          className="mt-8 w-32 h-32 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
          ENTER
        </button>

        {/* Sound toggle */}
        <button onClick={toggleSound} className="mt-4 text-white hover:text-[#2DD4BF]">
          {soundEnabled ? (
            <Volume2 className="w-6 h-6" />
          ) : (
            <VolumeX className="w-6 h-6" />
          )}
        </button>

        <p className="mt-2 text-xs uppercase text-[#2DD4BF]/60">
          [Enter the experience {soundEnabled ? 'with' : 'without'} sound]
        </p>
      </div>
      <style jsx global>{`
        @font-face {
          font-family: 'Helvetica';
          src: local('Helvetica'), local('Helvetica Neue'), local('Arial'), local('sans-serif');
        }

        body {
          font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
          background-color: #141415;
          color: white;
        }

        button {
          font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
        }
      `}</style>
    </div>)
  );
}