import { Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model2 } from "./Model2";

const ContactExperience = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0.5, 5],
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1c34ff"} />

      <group>
        <Text3D
          position={[-1, -2, -3]}
          rotation={[0, -0.4, 0]}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.04}
          size={1}
          font="fonts/Inter_Bold.json"
        >
          {`HELLO\nWORLD`}
          <meshNormalMaterial />
        </Text3D>

        <Model2
          scale={2.6}
          position={[0.5, -2.2, 0.5]}
          rotation={[1.5, Math.PI, Math.PI]}
        />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
