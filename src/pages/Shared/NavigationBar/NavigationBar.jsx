import navLogo from "../../../assets/navLogo2.jpg";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="md:flex justify-between items-center md:h-32 p-3  bg-orange-200 space-y-5 md:space-y-0 ">
      <div>
        <div className="flex items-center gap-3 ">
          <img src={navLogo} className="h-28 rounded-full" alt="navLogo" />
          <h2 className=" font-extrabold text-5xl font-serif text-slate-900">
            Musical <br /> Toys
          </h2>
        </div>
      </div>
      <div>
        <ul className=" md:flex gap-5 font-bold text-xl space-y-2 md:space-y-0">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-orange-600" : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink>
            <li>All Toys</li>
          </NavLink>
          <NavLink>
            <li>My Toys</li>
          </NavLink>
          <NavLink>
            <li>Add A Toy</li>
          </NavLink>
          <NavLink>
            {" "}
            <li>Blogs</li>
          </NavLink>
        </ul>
      </div>
      <div className="text-center font-bold text-xl">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
