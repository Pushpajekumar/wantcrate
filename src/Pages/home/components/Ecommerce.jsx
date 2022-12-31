import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Ecommerce = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInRight"
      animateOnce={true}
      animateOut="animate__fadeOutLeft"
    >
      <section className="h-96 w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <h2 className="animate__animated animate__fadeInLeft text-5xl font-semibold">
            WantCrate
          </h2>
        </div>
        <div className="w-full md:w-1/2 gap-5 h-full flex flex-col justify-center items-center animate__animated animate__fadeInRight">
          <h2 className="text-2xl md:text-4xl font-light">
            softwares for Ecommerce
          </h2>
          <p className="mx-7 md:mx-14 lg:mx-28 text-lg">
            Enabling Local vendors to grow and scale and Providing low cost
            goods to customers.
          </p>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Ecommerce;
