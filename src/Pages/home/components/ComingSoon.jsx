import React from "react";

const ComingSoon = () => {
  return (
    <section className="h-80 py-10 w-full flex items-center justify-center">
      <marquee behavior="slide" direction="left">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-7xl lg:text-9xl font-semibold text-center">
            Coming
          </p>
          <p className="text-7xl lg:text-9xl font-semibold text-center">Soon</p>
        </div>
      </marquee>
    </section>
  );
};

export default ComingSoon;
