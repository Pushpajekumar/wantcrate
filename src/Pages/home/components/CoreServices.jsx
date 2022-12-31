import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const CoreServices = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInRight"
      animateOnce={true}
      animateOut="animate__fadeOutLeft"
    >
      <section className=" h-full z-30 lg:h-screen px-5 md:px-10 lg:px-20 py-10">
        <div>
          <h2 className="text-3xl md:text-4xl">Our Core Services</h2>
          <p className=" text-lg font-semibold my-5">
            Our technology solutions are perfectly designed to ensure the
            virtual world meets your needs.
          </p>
        </div>
        <div className=" gap-5  h-[85%] flex justify-evenly items-center py-3 flex-wrap">
          <div className=" w-full md:w-72 h-full mx-2 py-5 gap-4 flex flex-col justify-evenly border border-gray-300 rounded-lg">
            <div className="h-36 w-full flex justify-center items-center flex-col">
              <img
                src="assets/images/foodDelivery.jpg"
                alt="Want create"
                className="w-36 h-36 rounded-full"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Food Delivery</h1>
              <article>
                <p className="text-sm text-left mx-2">
                  Coming up with the New food delivery software for Restaurants
                  to help restaurants grow. With the recent influx of food
                  delivery applications on smartphones, it is no wonder that so
                  many people are looking for an easy way to have their food
                  delivered right to their doorstep.
                </p>
              </article>
            </div>
            <div className="flex justify-center items-center">
              {" "}
              <Link to="/food">
                <button className="px-6 py-3 rounded bg-tertiary text-secondary">
                  {" "}
                  <div className="flex gap-3 justify-center items-center">
                    Learn More <BiRightArrowAlt />
                  </div>{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className=" w-full md:w-72 gap-4 h-full py-5 mx-2 flex flex-col justify-evenly border border-gray-300 rounded-lg">
            <div className="h-36 w-full flex justify-center items-center flex-col">
              <img
                src="assets/images/ecommerce.jpg"
                alt="Want create"
                className="w-36 h-36 rounded-full"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Ecommerce</h1>
              <article>
                <p className="text-sm text-left mx-2">
                  Online shopping has become an important part of people's
                  lives. With so many options available, it can be hard to
                  decide which ecommerce platform to use. With WantCrate we are
                  intended to make most out of the business for small vendors,
                  by making them enabled.
                </p>
              </article>
            </div>
            <div className="flex justify-center items-center">
              {" "}
              <button className="px-6 py-3 rounded bg-tertiary text-secondary">
                {" "}
                <div className="flex gap-3 justify-center items-center">
                  Learn More <BiRightArrowAlt />
                </div>{" "}
              </button>
            </div>
          </div>
          <div className=" md:w-72 w-full gap-4 h-full mx-2 py-5 flex flex-col justify-evenly border border-gray-300 rounded-lg">
            <div className="h-36 w-full flex justify-center items-center flex-col">
              <img
                src="assets/images/needFinder.jpg"
                alt="Want create"
                className="w-36 h-36 rounded-full"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Need Finder</h1>
              <article>
                <p className="text-sm text-left mx-2">
                  If you are like me, then at some point in your life you have
                  needed to find something. Whether it is a carpenter
                  requirement in the middle of nowhere or your Electrician
                  requirement . You can find everything very easily with
                  Needfinder Just list your business and wait for customer
                  calls.
                </p>
              </article>
            </div>
            <div className="flex justify-center items-center">
              {" "}
              <button className="px-6 py-3 rounded bg-tertiary text-secondary">
                {" "}
                <div className="flex gap-3 justify-center items-center">
                  Learn More <BiRightArrowAlt />
                </div>{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default CoreServices;
