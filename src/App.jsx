import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";

const App = () => {
  return (
    <div>
      <Loader />
      <NavBar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
