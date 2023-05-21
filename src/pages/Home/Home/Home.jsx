import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import CategoryShop from "../CategoryShop/CategoryShop";
import useTitle from "../../../hooks/useTitle";
import LatestToys from "../LatestToys/LatestToys";
import ToyBrands from "../ToyBrands/ToyBrands";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  useTitle("Home");
  const GalleryData = useLoaderData();
  return (
    <div className="space-y-20 p-10 md:p-0">
      <Banner></Banner>
      <Gallery GalleryData={GalleryData}></Gallery>
      <CategoryShop></CategoryShop>
      <LatestToys></LatestToys>
      <ToyBrands></ToyBrands>
    </div>
  );
};

export default Home;
