import { Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Heromodel2 } from "./Heromodel2";

const HeroExperience = () => {
  return (
    <Canvas>
      <ambientLight />

      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#ff28d5"} />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#1c34ff"} />

      <Sparkles
        count={100}
        size={2}
        speed={0.5}
        color={"pink"}
        scale={[10, 10, 2]}
      />

      <group>
        <Heromodel2 scale={9} position={[0, -15, 0]}></Heromodel2>
      </group>
    </Canvas>
  );
};

export default HeroExperience;
