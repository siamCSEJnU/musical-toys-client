import React from "react";
import banner from "../../../assets/banner/banner5.jpg";

const Banner = () => {
  return (
    <div className="flex items-center ">
      <div className="text-center  space-y-5 ">
        <h2 className="text-6xl font-bold space-y-2  ">
          <p>Play, Learn,</p>
          <p className="text-orange-500">and Grow </p>
          <p>with Music</p>
        </h2>
        <p className="pr-6 mx-auto text-stone-600">
          Welcome to Musical Toys, where the magic of music comes to life! From
          delightful instruments designed for tiny hands to interactive musical
          toys that spark creativity, we have everything your little maestro
          needs to explore the wonderful world of melodies. With a harmonious
          blend of fun and education, our collection aims to nurture a love for
          music, enhance cognitive development, and ignite the imagination.
        </p>
      </div>
      <div className="flex-shrink-0">
        <img
          src={banner}
          className=""
          style={{ width: "600px", height: "450px" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
