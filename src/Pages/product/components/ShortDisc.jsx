import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const ShortDisc = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInRight"
      animateOnce={true}
      animateOut="animate__fadeOutLeft"
    >
      <section className="h-full bg-secondary py-10 px-10 md:px-20">
        <h5 className=" text-2xl"> We provides developed software services!</h5>
        <div className=" px-5 md:px-10 lg:px-20 h-full flex flex-col justify-evenly items-start py-10">
          <p>
            The founding team of wantcrate.com is decided to build a platform to
            make each small/big restaurants in market live and operate digitally
            by implementing best of the technology available in every digital
            channel available in market today.Wantcrate is also focused on
            saving some commission for the restaurant owners on all the
            purchases done by their customer directly. Saving the money of the
            customer so that each and every one can focus on giving the best
            service to the customers.Wantcrate.com intends to achieve this by
            delivering a fully responsive and innovative customer experience
            throughout your entire brand journey thereby enabling them to
            achieve maximum profitability and high customer retention and
            loyalty through a digital-first approach!It allows Businesses to
            connect with their customers in a cost-effective way with the
            transparency they need to increase sales & retain their customers.
            We Have various options to give input in all the module user have
            interface options to provide the feedback on all the modules so that
            we can make all the features as per user requirements Wantcrate
            offers e-commerce functionality with an interactive and engaging
            user experience for the consumer as well as the shopkeepers using
            the highly secure platform It also enables businesses to reach new
            customers efficiently and reach a wider audience which also brings
            more traffic to the stores and gives better business experience to
            the consumers. It also lets the customer get informed about the
            different products coming to the store and provide the information
            to the customer about the products they have queries abou
          </p>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default ShortDisc;
