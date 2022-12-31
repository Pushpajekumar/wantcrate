import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const ShortDisc = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInRight"
      animateOnce={true}
      animateOut="animate__fadeOutLeft"
    >
      <section className="h-full md:h-72 bg-secondary py-10 px-5 md:px-10 lg:px-20">
        <h5 className="animate__animated animate__fadeInLeft text-2xl">
          Introduction-WantCrate
        </h5>
        <div className="px-5 md:px-10 lg:px-20 h-full flex flex-col justify-evenly items-start py-10">
          <p className="animate__animated animate__fadeInRight">
            Wantcrate is a new venture of our founders. <br /> Over successfully
            executing Sangtech Technologies with a huge client base of more that
            5000+ and on building more that 20+ types of software and having
            existence in more than 4 countries and many more. They are on the
            verge of building something very very awesome with multiple modules
            such as Ecommerce, Food Delivery and Needfinder. <br /> On the path
            of becoming the best delivery of Food delivery software for all the
            big and small restaurants, which can help all the Restaurants
            Digitize entire restaurant business and book on their personal and
            very own softwares with confidence. <br /> Making the restaurants
            reachable to their very own customers. Saving the commission money.
            Building the huge customer base and making the best of the market,
            promotions,support,Existence and alot more.
          </p>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default ShortDisc;
