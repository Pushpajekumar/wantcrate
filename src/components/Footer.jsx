import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="h-60 w-full bg-primary text-secondary">
      <div className="flex justify-evenly items-center h-4/5">
        <div>
          <ul className="font-light">
            <li>Quick Link</li>
            <li>About</li>
            <li>Products</li>
          </ul>
        </div>
        <div>
          <ul className="font-light">
            <li>Services</li>
            <li>WantCrate</li>
            <li>WantCrate Food</li>
          </ul>
        </div>
        <div>
          <h5>Contact Us</h5>
          <div className="flex gap-1 items-center">
            <BsTelephoneFill />
            <p>+91 9876543210</p>
          </div>
          <div className="flex gap-1 items-center">
            <MdEmail />
            <p>pushpaje@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="h-1/5 w-full ">
        <p className="text-center text-xl">
          WantCrate Technologies Part of Sangtech Technologies Pvt. Ltd
        </p>
      </div>
    </section>
  );
};

export default Footer;
