import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  useTitle("Toy Details");
  const toy = useLoaderData();
  console.log(toy);
  const {
    _id,
    category,
    details,
    photo_url,
    price,
    quantity,
    rating,
    toyName,
    seller_name,
  } = toy;
  return (
    <div className="flex md:flex-row flex-col gap-10 md:gap-0  md:w-2/3 mx-auto p-10 rounded-xl items-center border justify-center space-x-10 bg-slate-200">
      <div className="space-y-5">
        <img className="h-96 rounded-full" src={photo_url} alt="" />
        <h2 className="text-xl text-center font-semibold">
          Own By : <span className="font-mono ">{seller_name}</span>
        </h2>
      </div>
      <div className=" md:w-1/3  space-y-8 text-slate-700">
        <h2 className="text-4xl font-bold">{toyName}</h2>
        <div className="text-xl space-y-5 font-bold">
          <p>Category : {category}</p>
          <p>Rating : {rating}</p>
          <p>Price : {"$" + price}</p>
          <p>Available Quantity : {quantity}</p>
          <p className="">
            Description :
            <span className="font-semibold text-lg">{details}</span>
          </p>
        </div>

        <div className=" ">
          <button className="btn hover:bg-orange-500 border-0">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
