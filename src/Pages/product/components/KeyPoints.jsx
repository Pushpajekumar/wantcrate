import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { CgPushRight } from "react-icons/cg";

const KeyPoints = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInLeftt"
      animateOnce={true}
      animateOut="animate__fadeOutRight"
    >
      {" "}
      <section className="h-full py-10 lg:h-96 w-full bg-primary text-secondary flex flex-col md:flex-row">
        <div className="animate__animated animate__fadeInLeft w-full md:w-1/2 h-full flex justify-center items-center">
          <h2 className="text-5xl font-semibold">Key Points</h2>
        </div>
        <div className="animate__animated animate__fadeInRight w-full md:w-1/2  gap-2 h-full flex flex-col justify-center  md:items-start px-5 md:px-10 lg:px-20">
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">Dedicated Team</h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">Team Managers</h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">Good Support</h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">Best Backup</h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">SuccessFull Founders</h3>
          </div>
          <div className="flex jusstart items-center gap-5 my-2">
            {" "}
            <CgPushRight className="text-xl" />{" "}
            <h3 className="text-lg font-light">Huge Client Base</h3>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default KeyPoints;
