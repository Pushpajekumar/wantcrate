import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const LongDisc = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInLeft"
      animateOnce={true}
      animateOut="animate__fadeOutRight"
    >
      <section className="min-h-96 max-h-auto bg-primary w-full py-10 px-5 md:px-20">
        <h3 className="animate__animated animate__fadeInLeft text-4xl md:text-5xl text-center md:text-left font-semibold text-secondary">
          Why to Choose Us
        </h3>
        <div className="animate__animated animate__fadeInUp flex gap-5 my-5 justify-between items-start text-secondary flex-wrap">
          <div className="h-32 w-72 px-5 bg-stone-900 flex justify-center items-center rounded">
            <p>
              We have experts in various programming languages and software
              development tools.
            </p>
          </div>
          <div className="h-32 w-72 px-5 bg-stone-900 flex justify-center items-center rounded">
            <p>
              We use latest technologies while developing our software products.{" "}
            </p>
          </div>
          <div className="h-32 w-72 px-5 bg-stone-900 flex justify-center items-center rounded">
            <p>
              Our developers are extremely skilled and talented. They are
              committed to providing best solutions to our clients.{" "}
            </p>
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp flex gap-5 my-5 justify-between items-start text-secondary flex-wrap">
          <div className="h-32 w-72 px-5 bg-stone-900 flex justify-center items-center rounded">
            <p>
              Our clients include businesses, non-profit organizations and
              government organizations from all over the world.
            </p>
          </div>
          <div className="h-32 w-72 px-5 bg-stone-900 flex justify-center items-center rounded">
            <p>
              We are committed to providing quality service to our clients at
              affordable rates.
            </p>
          </div>
          <div className="h-32 w-72 px-5 bg-stone-900 flex justify-center items-center rounded">
            <p>
              We have a dedicated team of project managers, business analysts
              and software developers.
            </p>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default LongDisc;
