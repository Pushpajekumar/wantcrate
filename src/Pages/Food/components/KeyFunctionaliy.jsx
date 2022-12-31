import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { CgPushRight } from "react-icons/cg";

const KeyFunctionaliy = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInRight"
      animateOnce={true}
      animateOut="animate__fadeOutLeft"
    >
      <section className="h-full py-10 w-full bg-primary text-secondary flex flex-col md:flex-row">
        <div className=" w-full md:w-1/2  px-5 md:px-10 flex justify-center items-center">
          <h2 className=" text-3xl lg:text-5xl font-semibold">
            Complete business solutions of Restaurants
          </h2>
        </div>
        <div className="animate__animated animate__fadeInRight w-full md:w-1/2 gap-2 h-full flex flex-col justify-center items-start px-20">
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">Get Free Website!!</h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">Application</h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">Admin Application</h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">Rider Application</h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">Billing Software</h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">Order Management System</h3>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default KeyFunctionaliy;
