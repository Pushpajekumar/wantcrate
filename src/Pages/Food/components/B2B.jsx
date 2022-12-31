import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { CgPushRight } from "react-icons/cg";

const B2B = () => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInRight"
      animateOnce={true}
      animateOut="animate__fadeOutLeft"
    >
      <section className="h-full w-full flex flex-col md:flex-row py-10">
        <div className=" w-full md:w-2/5  px-5 md:px-10 flex justify-center items-center">
          <h2 className=" text-3xl lg:text-5xl font-semibold">
            Get the BEST B2B Rates
          </h2>
        </div>
        <div className="w-full md:w-3/5 h-full flex flex-col justify-center items-start px-5 md:px-10 lg:px-20">
          <table>
            <tr className="bg-gray-200 ">
              <th className="text-left py-1 px-2 md:px-10">Product</th>
              <th className="text-left py-1 px-2 md:px-10">Costs</th>
              <th className="text-left py-1 px-2 md:px-10">WantCrate Cost</th>
            </tr>
            <tr>
              <td className="text-left py-1 px-2 md:px-10">Website</td>
              <td className="text-left py-1 px-2 md:px-10">₹ 20,000 </td>
              <td className="text-left py-1 px-2 md:px-10">₹ 000 </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="text-left py-1 px-2 md:px-10">Billing Sofwere</td>
              <td className="text-left py-1 px-2 md:px-10">₹ 20,000</td>
              <td className="text-left py-1 px-2 md:px-10">₹ 7,000</td>
            </tr>
            <tr>
              <td className="text-left py-1 px-2 md:px-10">OMS</td>
              <td className="text-left py-1 px-2 md:px-10"> ₹ 20,000 </td>
              <td className="text-left py-1 px-2 md:px-10"> ₹ 7,000 </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="text-left py-1 px-2 md:px-10">
                Customer Applications
              </td>
              <td className="text-left py-1 px-2 md:px-10"> ₹ 20,000 </td>
              <td className="text-left py-1 px-2 md:px-10"> ₹ 8,000 </td>
            </tr>
            <tr>
              <td className="text-left py-1 px-2 md:px-10">
                Rider applications
              </td>
              <td className="text-left py-1 px-2 md:px-10"> ₹ 20,000</td>
              <td className="text-left py-1 px-2 md:px-10"> ₹ 7,000</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="text-left py-1 px-2 md:px-10">
                Admin application
              </td>
              <td className="text-left py-1 px-2 md:px-10">₹ 20,000 </td>
              <td className="text-left py-1 px-2 md:px-10">₹ 7,000 </td>
            </tr>
            <tr>
              <td className="text-left py-1 px-2 md:px-10">Total</td>
              <td className="text-left py-1 px-2 md:px-10">₹ 1,20,000 </td>
              <td className="text-left py-1 px-10">₹ 36,000 </td>
            </tr>
          </table>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default B2B;
