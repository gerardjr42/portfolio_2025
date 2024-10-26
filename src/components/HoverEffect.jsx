"use client";
import { useCallback, useEffect, useState } from "react";

export function HoverEffect({
  color = "rgba(44, 173, 158, 0.15)",
  size = 100,
  opacity = 0.15,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(circle ${size}px at ${mousePosition.x}px ${mousePosition.y}px, ${color}, transparent 100%)`,
      }}
    />
  );
}
