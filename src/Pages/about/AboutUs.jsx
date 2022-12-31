import React from "react";
import Banner from "../../components/Banner";
import Footer2 from "../../components/Footer2";
import CoreServices from "../home/components/CoreServices";

const AboutUs = () => {
  return (
    <div>
      <Banner
        title1="Products"
        discription="The 3 Exclusive products are here"
      />
      <CoreServices />
      <Footer2 />
    </div>
  );
};

export default AboutUs;
