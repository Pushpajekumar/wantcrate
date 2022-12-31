import React from "react";
import Banner from "../../components/Banner";
import Footer2 from "../../components/Footer2";
import KeyFunctionaliy from "./components/KeyFunctionaliy";
import LongDesc from "./components/LongDesc";
import ShortDisc from "./components/ShortDisc";
import TechnicalDesign from "./components/TechnicalDesign";
import ComingSoon from "../home/components/ComingSoon";
import B2B from "./components/B2B";
import Charges from "./components/Charges";
const Food = () => {
  return (
    <div>
      <Banner
        title1="WantCrate Food"
        discription="The completet solution to all software needs of Restaurants!"
      />
      <ShortDisc />
      {/* <LongDesc /> */}
      <KeyFunctionaliy />
      <B2B />
      <Charges />
      {/* <TechnicalDesign /> */}
      <ComingSoon />
      <Footer2 />
    </div>
  );
};

export default Food;
