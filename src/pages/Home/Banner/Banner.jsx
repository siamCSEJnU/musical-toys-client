import React from "react";
import banner from "../../../assets/banner/banner5.jpg";

const Banner = () => {
  return (
    <div className="md:flex items-center space-y-5 md:space-y-0 bg-slate-200 ">
      <div className="text-center  space-y-5 ">
        <h2 className="text-6xl text-slate-700 font-bold space-y-2  ">
          <p>Play, Learn,</p>
          <p className="text-orange-500">and Grow </p>
          <p>with Music</p>
        </h2>
        <p className="px-6 mx-auto text-stone-600">
          Welcome to Musical Toys, where the magic of music comes to life! From
          delightful instruments designed for tiny hands to interactive musical
          toys that spark creativity, we have everything your little maestro
          needs to explore the wonderful world of melodies. With a harmonious
          blend of fun and education, our collection aims to nurture a love for
          music, enhance cognitive development, and ignite the imagination.
        </p>
        <button className="btn bg-yellow-600 border-0">Explore More</button>
      </div>
      <div className="flex-shrink-0">
        <img
          src={banner}
          className="object-cover"
          style={{ width: "600px", height: "450px" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
