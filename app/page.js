// pages/portfolio.js

import React from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';
import CTA from './components/work';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <hr />
        <Skills />
        <hr />
        <CTA />
        <hr />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
