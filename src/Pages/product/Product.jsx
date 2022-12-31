import React from "react";
import Banner from "../../components/Banner";
import ShortDisc from "./components/ShortDisc";
import Footer2 from "../../components/Footer2";
import LongDisc from "./components/LongDisc";
import Modules from "./components/Modules";
import KeyPoints from "./components/KeyPoints";
import ComingSoon from "../home/components/ComingSoon";

const Product = () => {
  return (
    <div>
      <Banner
        title1="The New Revolution"
        discription="Let’s just have a walk through of the background and Founders credentials!"
      />
      <ShortDisc />
      <LongDisc />
      <Modules />
      <KeyPoints />
      <ComingSoon />
      <Footer2 />
    </div>
  );
};

export default Product;
