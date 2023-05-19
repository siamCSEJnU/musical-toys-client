import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
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
    <div className="card card-compact w-96 bg-slate-200 shadow-xl p-3">
      <figure>
        <img className="h-80 w-full" src={photo_url} alt="photo" />
      </figure>
      <div className="card-body text-slate-700">
        <h2 className="text-start font-semibold text-2xl">{toyName}</h2>
        <p className="text-lg">Sub-category : {category}</p>
        <p className="text-lg">Price : {"$" + price}</p>
        <p className="text-lg">Available Quantity : {quantity}</p>
        <p className="text-lg ">
          Seller : <span className="font-mono">{seller_name}</span>{" "}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/allToys/${_id}`}>
            <button className="btn border-0 hover:bg-orange-500">
              view details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
