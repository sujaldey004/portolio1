import React from "react";
import GradientSphere from "../components/GradientSphere";
import TitleHeader from "../components/TitleHeader";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import AnimatedModel from "../components/AnimatedModel";
import { bentoSocialLinks } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // Slide-in animation of cards
    gsap.from("#cards", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.3,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });

    // staggered text animations
    gsap.from(".animated-text", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.3,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
      },
    });
  }, []);

  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      <GradientSphere
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />
      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title={"About Me"}
          text={"Passionate Creator, Lifelong Learner"}
          number={"01"}
        />

        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 w-full rounded-2xl p-7 h-full">
                <div>
                  <img
                    src="/images/flower.svg"
                    alt="flower"
                    className="md:w-32 w-16 flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    Sujal Dey
                  </h1>
                  <p className="md:text-2xl mt-2">
                    I am a India-based product designer with a focus on web
                    design, illustration, a visual development. I have a diverse
                    range of experience having worked across various fields and
                    industries.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="w-full md:h-full h-60 rounded-2xl hover:cursor-grab">
                <div className="w-full h-full">
                  <Canvas camera={{ position: [-2, 0.5, 5], fov: 45 }}>
                    <ambientLight intensity={1.2} />
                    <directionalLight position={[3, 5, 2]} intensity={1.2} />

                    <Suspense fallback={null}>
                      <Environment preset="sunset" />
                      <OrbitControls
                        enableZoom={false}
                        enablePan={true}
                        enableRotate={true}
                      />
                      <AnimatedModel />
                    </Suspense>
                  </Canvas>
                </div>
              </div>
            </div>

            <div id="cards" className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl w-full h-full p-7">
                <div className="flex flex-col justify-center h-full">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    Web Design & Dev
                  </h1>
                  <p className="text-2xl max-w-96 animated-text">
                    Cleanly Designed, Conversion-focused and build for easy
                    updates.
                  </p>
                </div>
              </div>
            </div>

            <div id="cards" className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl w-full h-full p-7">
                <div className="flex flex-col justify-center h-full">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    UI UX Design
                  </h1>
                  <p className="text-2xl max-w-96 animated-text">
                    Seamless web or mobile app design to wow your users.
                  </p>
                </div>
              </div>
            </div>

            <div id="cards" className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl w-full h-full p-7">
                <div className="flex flex-col justify-between h-full">
                  {["BE YOURSELF!", "BE DIFFERENT!", "BUILD DIFFERENT!"].map(
                    (text, index) => (
                      <h1
                        className="gradient-title md:text-5xl text-3xl font-bold animated-text"
                        key={index}
                      >
                        {text}
                      </h1>
                    )
                  )}
                </div>
              </div>
            </div>

            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                  <div className="flex justify-between items-center h-full">
                    <div className="flex items-center md:gap-5">
                      <img src={item.icon} alt="item.icon" />
                      <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                        {item.name}
                      </h1>
                    </div>
                    <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                      <img
                        src="/images/arrowupright.svg"
                        alt="arror-up"
                        className="lg:scale-100 scale-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
