import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import navLogo from "../../../assets/navLogo2.jpg";
const Footer = () => {
  return (
    <footer className=" bg-orange-200 pt-5   w-full">
      <div className="footer grid font-semibold ps-4  grid-cols-2 md:grid-cols-4 ">
        <div className=" ">
          <Link to="/">
            {" "}
            <h2 className=" font-extrabold text-5xl font-serif text-slate-900">
              Musical <br /> Toys
            </h2>
          </Link>
          <Link className="/">
            <img src={navLogo} className="h-28 rounded-full" alt="navLogo" />
          </Link>
        </div>

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
        {/* <div>
          <span className="text-xl font-bold ">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div> */}
        <div className="pr-5">
          <span className="text-xl font-bold ">Subscribe</span>
          <label>Enter your email address</label>
          <input
            type="email"
            name=""
            id=""
            // className="px-5  py-2"
            className="w-full p-3 outline-0 border-0"
            placeholder="your email"
          />
          <input
            type="submit"
            className="bg-slate-700  p-2 text-white font-semibold text-lg "
            value="Subscribe"
          />
        </div>
      </div>
      <div className=" pt-8 md:pt-4">
        <div className=" font-semibold text-center space-x-2 md:space-x-4 pb-1 ">
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <p className="text-center">
          &copy; copyright {new Date().getFullYear()} - All rights reserved by
          Musical Toys
        </p>
      </div>
      <div className="flex justify-center p-4 gap-4">
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
