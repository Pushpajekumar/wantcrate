import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const LongDesc = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInLeft"
      animateOnce={true}
      animateOut="animate__fadeOutRight"
    >
      <section className="h-full md:h-96 bg-primary w-full flex justify-evenly items-start text-secondary flex-col py-10 px-5 md:px-10 lg:px-20">
        <p>
          The Application is designed to manage day to day restaurant data and
          help create accuracy in order management and deliveries. It also helps
          customers in tracking foods delivery in real time from your restaurant
          to them(customers).
        </p>
        <br />
        <br />
        <p>
          Our approach is to divide the whole project into major components. So,
          mobile app for catalog and taking orders, restaurant web-based
          interface for active orders, restaurant smartwatch app to be used by
          waiters, administrator area with two levels authentication (employee
          and admin) backend (db. and API) service presentation website.{" "}
        </p>
      </section>
    </ScrollAnimation>
  );
};

export default LongDesc;
