import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Modules = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInRight"
      animateOnce={true}
      animateOut="animate__fadeOutLeft"
    >
      <section className="h-full md:h-60  w-full py-10 flex flex-col justify-evenly s">
        <h3 className="animate__animated animate__fadeInLeft px-5 md:px-10 lg:px-20 font-bold text-4xl md:text-5xl">
          The modules
        </h3>
        <p className="animate__animated animate__fadeInRight text-center px-3 text-xl">
          WantCrateFood || NeedFinder || WantCrate
        </p>
      </section>
    </ScrollAnimation>
  );
};

export default Modules;
