import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Snowflakes from "./components/Snowflakes";

function App() {
  return (
    <div className="App">
      <Snowflakes count={50} />
      <Header />
      <Hero />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
