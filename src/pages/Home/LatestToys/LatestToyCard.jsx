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
        className="object-cover h-1/2 rounded-lg"
        src={photo_url}
      />
      <Card.Body className="text-slate-800">
        <Card.Title className="font-semibold text-2xl ">{toyName}</Card.Title>
        <Card.Text className="font-semibold">
          {details?.slice(0, 40) + "..."}
        </Card.Text>
        <Link className="text-center" to={`/allToys/${_id}`}>
          <input
            type="submit"
            value="Dive In"
            className="hover:bg-lime-600 outline-0 border-0 btn"
          />
        </Link>
      </Card.Body>
    </Card>
  );
};

export default LatestToyCard;
