import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div className="app relative w-full h-full text-white bg-black">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
