import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div className="space-y-20 p-10 md:p-0">
      <Banner></Banner>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
