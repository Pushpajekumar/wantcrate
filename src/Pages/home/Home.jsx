import React from "react";
import Banner from "../../components/Banner";
import ContactUsForm from "../../components/ContactUsForm";
// import Footer from "../../components/Footer";
import Footer2 from "../../components/Footer2";
import ComingSoon from "./components/ComingSoon";
import CoreServices from "./components/CoreServices";
import Ecommerce from "./components/Ecommerce";
import FoodDelivery from "./components/FoodDelivery";
import NeedFinder from "./components/NeedFinder";

const Home = () => {
  return (
    <div>
      <Banner
        title1="Get the Next"
        title2="level development"
        discription="Every line of code we deliver is carefully crafted by our in-house
              team of professional developers. While constantly looking for new
              horizons, challenges, and opportunities in the web development, we
              have focused our attention on these core areas:"
      />
      <CoreServices />
      <FoodDelivery />
      <Ecommerce />
      <NeedFinder />
      <ComingSoon />
      {/* <Footer /> */}
      <Footer2 />
      {/* <ContactUsForm /> */}
    </div>
  );
};

export default Home;
