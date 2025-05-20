import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { Son_goku_and_kintoun_nimbus } from "../../public/models/Son_goku_and_kintoun_nimbus";

const AnimatedModel = () => {
  const group = useRef();

  const [springs] = useSpring(() => ({
    scale: 1,
    config: { mass: 1, tension: 120, friction: 12 },
  }));

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = Math.sin(t * 1.5) * 0.1 - 1.5; // smooth float
    }
  });

  return (
    <a.group ref={group} scale={springs.scale}>
      <Son_goku_and_kintoun_nimbus scale={2.2} position={[0, 1, 0]} />
    </a.group>
  );
};

export default AnimatedModel;
