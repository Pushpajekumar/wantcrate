import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const NeedFinder = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInLeft"
      animateOnce={true}
      animateOut="animate__fadeOutRight"
    >
      <section className="h-96 w-full flex bg-primary text-secondary flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <h2 className="animate__animated animate__fadeInLeft text-5xl font-semibold">
            Need Finder
          </h2>
        </div>
        <div className="w-full md:w-1/2 gap-5 h-full flex flex-col justify-center items-center animate__animated animate__fadeInRight">
          <h2 className="text-2xl md:text-4xl font-light">
            Softwares for NeedFindings
          </h2>
          <p className="mx-7 md:mx-14 lg:mx-28 text-lg">
            List your local business,sit back and relax Customers will reach out
            to you!
          </p>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default NeedFinder;
