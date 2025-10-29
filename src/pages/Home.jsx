import React from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, PortfolioShowcase, StarsCanvas } from "../components";

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <PortfolioShowcase />
      <Experience />
      <Feedbacks />
      <Contact />
      <div className='relative z-0'>
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Home;


