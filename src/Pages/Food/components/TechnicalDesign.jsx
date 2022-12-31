import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { CgPushRight } from "react-icons/cg";

const TechnicalDesign = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInRight"
      animateOnce={true}
      animateOut="animate__fadeOutLeft"
    >
      <section className="h-96 w-full bg-primary text-secondary flex flex-col md:flex-row">
        <div className=" w-full md:w-1/2 h-full flex justify-center items-center">
          <h2 className="animate__animated animate__fadeInLeft text-4xl lg:text-5xl font-semibold">
            Technical Design
          </h2>
        </div>
        <div className="animate__animated animate__fadeInRight w-full md:w-1/2 gap-2 h-full flex flex-col justify-center items-start px-20">
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">
              Identity. App icon, logo & splash screen.
            </h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">
              Mobile app design for smartphones
            </h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">
              Restaurant web-based interface.
            </h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">
              Service presentation website.
            </h3>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default TechnicalDesign;
