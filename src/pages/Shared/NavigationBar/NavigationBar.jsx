import React from "react";
import navLogo from "../../../assets/navLogo2.jpg";

const NavigationBar = () => {
  return (
    <div className="md:flex justify-between items-center md:h-32 p-3  bg-orange-200 space-y-5 md:space-y-0 ">
      <div>
        <div className="flex items-center gap-3 ">
          <img src={navLogo} className="h-28 rounded-full" alt="navLogo" />
          <h2 className=" font-extrabold text-5xl font-serif">
            Musical <br /> Toys
          </h2>
        </div>
      </div>
      <div>
        <ul className=" md:flex gap-5 font-bold text-xl space-y-2 md:space-y-0">
          <li>Home</li>
          <li>All Toys</li>
          <li>My Toys</li>
          <li>Add A Toy</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className="text-center font-bold text-xl">
        <button>Login</button>
      </div>
    </div>
  );
};

export default NavigationBar;
