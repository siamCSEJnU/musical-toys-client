import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const LatestToyCard = ({ toy }) => {
  const {
    _id,
    category,
    photo_url,
    price,
    quantity,
    rating,
    toyName,
    seller_name,
    seller_email,
    tags,
    details,
  } = toy;
  return (
    <Card
      className="bg-orange-300 px-3 pt-3  "
      md:style={{ width: "18rem", height: "30rem" }}
    >
      <Card.Img
        variant="top"
        className="object-cover  h-60 rounded-lg"
        // style={{ height: "12rem" }}
        src={photo_url}
      />

      <div className="text-slate-800 mt-5 space-y-4">
        <h2 className="font-semibold text-2xl text-center ">{toyName}</h2>
        <p className="font-semibold">{details?.slice(0, 60) + "..."}</p>
        <div className="text-center pb-5">
          <Link to={`/allToys/${_id}`}>
            <input
              type="submit"
              value="Dive In"
              className="hover:bg-lime-600 outline-0 border-0 btn"
            />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default LatestToyCard;
