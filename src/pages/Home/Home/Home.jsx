import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import CategoryShop from "../CategoryShop/CategoryShop";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div className="space-y-20 p-10 md:p-0">
      <Banner></Banner>
      <Gallery></Gallery>
      <CategoryShop></CategoryShop>
    </div>
  );
};

export default Home;
