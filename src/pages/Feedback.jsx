import React from "react";
import { Navbar } from "../components";
import FeedbackViewer from "../components/FeedbackViewer";

const Feedback = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <Navbar />
      <div className="pt-20">
        <FeedbackViewer />
      </div>
    </div>
  );
};

export default Feedback;

