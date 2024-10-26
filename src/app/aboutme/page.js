import { HoverEffect } from "@/components/HoverEffect";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-[#141415] text-white font-geistMono">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-thin mb-2">About Me</h1>
        <p className="text-[#2CAD9E] text-xl">Welcome to my portfolio</p>
      </div>
      <HoverEffect />
    </div>
  );
}
