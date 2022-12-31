import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { CgPushRight } from "react-icons/cg";

const Charges = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInRight"
      animateOnce={true}
      animateOut="animate__fadeOutLeft"
    >
      <section className="h-full bg-primary text-white w-full flex flex-col md:flex-row py-10">
        <div className=" w-full md:w-2/5  px-5 md:px-10 flex justify-center items-center flex-col">
          <h2 className=" text-3xl lg:text-4xl font-semibold">
            Your Restaurant business in pocket
          </h2>

          <p className=" text-xl font-semibold my-2">
            Pay in EMI/Installments as low as 3000/month g
          </p>
        </div>
        <div className="w-full  md:w-3/5 h-full flex flex-col justify-center items-start px-5 md:px-10 lg:px-20">
          <table>
            <tr className="bg-black ">
              <th className="text-left py-1 px-2 md:px-10">
                Amount per Months
              </th>
              <th className="text-left py-1 px-2 md:px-10">
                Duration in Months
              </th>
              <th className="text-left py-1 px-2 md:px-10">Total</th>
            </tr>
            <tr>
              <td className="text-left py-1 px-2 md:px-10">₹ 3,000 </td>
              <td className="text-left py-1 px-2 md:px-10">12 Months</td>
              <td className="text-left py-1 px-2 md:px-10">₹ 36,000 </td>
            </tr>
            <tr className="bg-black ">
              <td className="text-left py-1 px-2 md:px-10">₹ 4,000 </td>
              <td className="text-left py-1 px-2 md:px-10">9 Months</td>
              <td className="text-left py-1 px-2 md:px-10">₹ 36,000 </td>
            </tr>
            <tr>
              <td className="text-left py-1 px-2 md:px-10">₹ 6,000 </td>
              <td className="text-left py-1 px-2 md:px-10">6 Months</td>
              <td className="text-left py-1 px-2 md:px-10">₹ 36,000 </td>
            </tr>
            <tr className="bg-black ">
              <td className="text-left py-1 px-2 md:px-10">₹ 11,000 </td>
              <td className="text-left py-1 px-2 md:px-10">3 Months</td>
              <td className="text-left py-1 px-2 md:px-10">₹ 33,000 </td>
            </tr>
            <tr>
              <td className="text-left py-1 px-2 md:px-10">₹ 30,000 </td>
              <td className="text-left py-1 px-2 md:px-10">1 Months</td>
              <td className="text-left py-1 px-2 md:px-10">₹ 30,000 </td>
            </tr>
          </table>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Charges;
