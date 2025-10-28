import React from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, PortfolioShowcase, StarsCanvas } from "../components";
import FeedbackWidget from "../components/FeedbackWidget";

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
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      
      {/* Feedback Widget - floating button */}
      <FeedbackWidget />
    </div>
  );
};

export default Home;


