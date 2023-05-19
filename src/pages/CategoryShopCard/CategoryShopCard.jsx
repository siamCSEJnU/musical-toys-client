import React from "react";

const CategoryShopCard = ({ toy }) => {
  console.log(toy);
  const { photo_url, price, rating, toyName } = toy;
  return (
    <div className="card card-compact  w-96 bg-slate-200 shadow-xl">
      <figure>
        <img
          src={photo_url}
          className="h-80 w-full p-3 rounded-3xl"
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-slate-700">
        <h2 className="text-start font-semibold text-2xl">{toyName}</h2>
        <p className="text-lg  text-start ">Price :{"$" + price}</p>
        <p className="text-lg text-start ">Rating :{rating}</p>
        <div className="card-actions justify-end">
          <button className="btn hover:bg-orange-500 border-0">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryShopCard;
