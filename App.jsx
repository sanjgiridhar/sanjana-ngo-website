import React from "react";
import { Element } from 'react-scroll';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/Projects';
import Events from './components/Events';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>

      <div className='container'>
        <Element name="about">
          <About />
        </Element>

        <Element name="projects">
          <ProjectsSection />
        </Element>
      </div>

      <Element name="events">
        <Events />
      </Element>

      <Element name="blogs">
        <Blogs />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />

    </Router>
  );
};

export default App;
