import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-orange-200 grid font-semibold grid grid-cols-2 md:grid-cols-4 ">
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
        {/* <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div> */}
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
    </footer>
  );
};

export default Footer;
