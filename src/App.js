import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/home/Home";
import Product from "../src/Pages/product/Product";
import About from "../src/Pages/about/AboutUs";
import Food from "./Pages/Food/Food";
import ContactUs from "../src/Pages/contact/ContactUs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<About />} />
      <Route path="/about" element={<Product />} />
      <Route path="/food" element={<Food />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default App;
