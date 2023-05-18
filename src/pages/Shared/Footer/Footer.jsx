import React from "react";
import { FaBeer, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-orange-200">
      <div className="footer p-10 grid font-semibold grid grid-cols-2 md:grid-cols-4 ">
        <div>
          <span className=" text-xl font-bold ">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="text-xl font-bold ">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Toys kit</a>
        </div>
        <div>
          <span className="text-xl font-bold ">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="text-xl font-bold ">Subscribe</span>
          <label>Enter your email address</label>
          <input
            type="email"
            name=""
            id=""
            className="px-5 py-2"
            placeholder="your email"
          />
          <input
            type="submit"
            className="bg-orange-700 p-2 text-white font-semibold text-lg "
            value="Subscribe"
          />
        </div>
      </div>
      <div className=" pb-5 ">
        <p className="text-center">
          &copy; copyright {new Date().getFullYear()} - All rights reserved by
          Musical Toys
        </p>
      </div>
      <div className="flex justify-center pb-5 gap-4">
        <span className="h-8">
          <FaFacebook></FaFacebook>
        </span>
        <span>
          <FaTwitter></FaTwitter>
        </span>
        <span>
          <FaYoutube></FaYoutube>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
