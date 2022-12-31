import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import ScrollAnimation from "react-animate-on-scroll";

const Banner = ({ discription, title1, title2 }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <section className=" bg-primary h-full md:h-screen w-full">
      <div className="  hidden md:flex justify-between items-center  py-5 w-full lg:w-4/5 px-10">
        <div className="h-20 w-20 bg-secondary rounded">
          <img
            src="assets/images/logo.png"
            alt="want crate"
            className=" w-full h-full object-cover"
          />
        </div>
        <nav>
          <ul className="flex gap-5 text-secondary font-semibold text-medium">
            <Link to="/">
              {" "}
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link to="/product">
              <li className="cursor-pointer">Products</li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer">About Us</li>
            </Link>
            <Link to="/food">
              <li className="cursor-pointer">Food</li>
            </Link>
            <Link to="/contact">
              <li className="cursor-pointer">Contact Us</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div>
        <div className="flex justify-between items-center px-10 py-5 md:hidden z-20">
          <div className="h-12 w-12 md:h-20 md:w-20 bg-secondary rounded">
            <img
              src="assets/images/logo.png"
              alt="want crate"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="z-30">
            {nav ? (
              <RxCross1
                className="text-secondary text-4xl cursor-pointer"
                onClick={handleNav}
              />
            ) : (
              <RxHamburgerMenu
                className="text-secondary text-4xl cursor-pointer"
                onClick={handleNav}
              />
            )}
          </div>
        </div>
        <div className="z-30">
          {nav ? (
            <nav>
              <ul className="text-xl text-secondary ">
                <Link to="/">
                  <li className="py-3 z-30 text-center bg-red-400 rounded my-2">
                    Home
                  </li>
                </Link>
                <Link to="/product">
                  <li className="py-3 z-30 text-center bg-red-400 rounded my-2">
                    Product
                  </li>
                </Link>
                <Link to="/about">
                  <li className="py-3 z-30 text-center bg-red-400 rounded my-2">
                    About Us
                  </li>
                </Link>
                <Link to="/food">
                  <li className="py-3 z-30 text-center bg-red-400 rounded my-2">
                    Food
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="py-3 z-30 text-center bg-red-400 rounded my-2">
                    Contact Us
                  </li>
                </Link>
              </ul>
            </nav>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className=" hidden md:block w-72 h-[50%] bg-tertiary rounded-lg absolute top-0 lg:top-0 right-0"></div>
      <div className="pl-4 lg:pl-14 h-full w-full lg:w-2/3 md:h-4/5 flex relative justify-center flex-col py-10 md:py-0">
        <div className="md:hidden z-0 w-72 h-[50%] bg-tertiary rounded-lg absolute top-0  right-0"></div>
        <div className="z-30">
          <h2 className="text-4xl lg:text-6xl text-secondary font-light tracking-wide">
            {title1}
          </h2>
          <h2 className="text-4xl md:text-6xl text-secondary  font-light tracking-wide ">
            {title2}
          </h2>
        </div>
        <div className="my-5 w-full lg:w-2/3 z-30 ">
          <article className="">
            <p className="my-10 text-secondary text-base font-light">
              {discription}
            </p>
          </article>
          <div className=" -z-10 w-72 h-[50%] bg-tertiary md:hidden rounded-lg absolute top-[50%] right-52"></div>
        </div>
      </div>
      <div className=" hidden md:block w-72 h-[50%] bg-tertiary rounded-lg absolute top-[50%] right-52"></div>
    </section>
  );
};

export default Banner;
