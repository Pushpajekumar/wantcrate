import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { CgPushRight } from "react-icons/cg";

const FoodDelivery = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInUp"
      animateOnce={true}
      animateOut="animate__fadeOutUp"
    >
      <section className=" min-h-screen max-h-full w-full py-10 bg-primary text-white ">
        <div className="flex flex-col md:flex-row">
          <div className="px-10 w-full md:w-1/2 flex items-center flex-col justify-between h-4/5">
            <h1 className="text-4xl md:text-5xl font-semibold">
              WantCrate Food
            </h1>
            <div className="flex justify-center items-center my-10">
              <article>
                <div className="flex justify-start items-center gap-5 my-2">
                  {" "}
                  <CgPushRight className="text-xl" />{" "}
                  <h3 className="text-lg font-light">Billing Software</h3>
                </div>
                <div className="flex justify-start items-center gap-5 my-2">
                  {" "}
                  <CgPushRight className="text-xl" />{" "}
                  <h3 className="text-lg font-light">Billing Software</h3>
                </div>
                <div className="flex justify-start items-center gap-5 my-2">
                  {" "}
                  <CgPushRight className="text-xl" />{" "}
                  <h3 className="text-lg font-light">Website</h3>
                </div>
                <div className="flex justify-start items-center gap-5 my-2">
                  {" "}
                  <CgPushRight className="text-xl" />{" "}
                  <h3 className="text-lg font-light">Customer Application</h3>
                </div>
                <div className="flex justify-start items-center gap-5 my-2">
                  {" "}
                  <CgPushRight className="text-xl" />{" "}
                  <h3 className="text-lg font-light">Rider Application</h3>
                </div>
                <div className="flex justify-start items-center gap-5 my-2">
                  {" "}
                  <CgPushRight className="text-xl" />{" "}
                  <h3 className="text-lg font-light">Admin Application</h3>
                </div>
                <div className="flex jusstart items-center gap-5 my-2">
                  {" "}
                  <CgPushRight className="text-xl" />{" "}
                  <h3 className="text-lg font-light">OMS</h3>
                </div>
              </article>
            </div>
            {/* <h2 className="text-4xl font-light">Softwares for Resturents</h2> */}
          </div>
          <div className="w-full md:w-1/2 flex gap-2 flex-col justify-between h-[90%] px-5 lg:px-10">
            <h3 className="text-4xl md:text-5xl  font-light">
              Softwares for Resturents
            </h3>
            <p className="text-lg">From billing through Booking to Delivery</p>
            <p className="text-lg">
              One Stop Solution for all the Restaurant Requirements.
            </p>
            <table>
              <tr className="bg-black ">
                <th className="text-left py-1 px-10">Item</th>
                <th className="text-left py-1 px-10">Charges</th>
              </tr>
              <tr>
                <td className="text-left py-1 px-10">One Time</td>
                <td className="text-left py-1 px-10">30,000 /_</td>
              </tr>
              <tr className="bg-black">
                <td className="text-left py-1 px-10">Installments</td>
                <td className="text-left py-1 px-10">36,000 /_</td>
              </tr>
              <tr>
                <td className="text-left py-1 px-10">Per Month</td>
                <td className="text-left py-1 px-10">3,000 /_</td>
              </tr>
              <tr className="bg-black">
                <td className="text-left py-1 px-10">One Time</td>
                <td className="text-left py-1 px-10">30,000 /_</td>
              </tr>
              <tr>
                <td className="text-left py-1 px-10">Licensed till</td>
                <td className="text-left py-1 px-10">18 Months</td>
              </tr>
              <tr className="bg-black">
                <td className="text-left py-1 px-10">Renewal Cost</td>
                <td className="text-left py-1 px-10">3,000 for next 1 year</td>
              </tr>
              <tr>
                <td className="text-left py-1 px-10">Update Cost</td>
                <td className="text-left py-1 px-10">NA</td>
              </tr>
              <tr className="bg-black">
                <td className="text-left py-1 px-10">
                  Payment Gateway Charges
                </td>
                <td className="text-left py-1 px-10">2000 /_</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="my-10">
          <p className="text-center text-xl">
            Provide Billing software ,Website and Google promotion-12,000/for
            life time
          </p>
        </div>
        <p className="text-right my-10 px-10 text-4xl font-semibold">
          Key Functionality
        </p>
      </section>
    </ScrollAnimation>
  );
};

export default FoodDelivery;
