import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

const Loader = () => {
  const { progress } = useProgress();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      // Wait a tiny bit to ensure assets are really done
      const timeout = setTimeout(() => {
        gsap.to(".loader-screen", {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => setIsLoading(false),
        });
      }, 500); // delay for smoother experience
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (!isLoading) return null;

  return (
    <div className="loader-screen bg-black-100 w-screen h-dvh fixed top-0 left-0 z-[100]">
      <div className="flex-center w-full h-full">
        <img src="/images/loader.gif" alt="loader" />
      </div>
      <div className="text-white-50 font-bold text-7xl leading-none gradient-title absolute bottom-10 right-10">
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loader;
