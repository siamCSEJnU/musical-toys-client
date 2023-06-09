import { useContext } from "react";
import navLogo from "../../../assets/navLogo2.jpg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const NavigationBar = () => {
  const { user, LogOut, setLogError } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        console.log("successfully sign out..");
        setLogError("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="md:flex justify-between items-center md:h-32 p-3  bg-orange-200 space-y-5 md:space-y-0 ">
      <div>
        <div className="flex items-center gap-3 ">
          <Link className="/">
            <img src={navLogo} className="h-28 rounded-full" alt="navLogo" />
          </Link>
          <Link to="/">
            {" "}
            <h2 className=" font-extrabold text-5xl font-serif text-slate-900">
              Musical <br /> Toys
            </h2>
          </Link>
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
          <NavLink
            to="/allToys"
            className={({ isActive }) => (isActive ? "text-orange-600" : "")}
          >
            <li>All Toys</li>
          </NavLink>
          {user && (
            <NavLink
              to="/myToys"
              className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            >
              <li>My Toys</li>
            </NavLink>
          )}
          {user && (
            <NavLink
              to="/addToy"
              className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            >
              <li>Add A Toy</li>
            </NavLink>
          )}
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "text-orange-600" : "")}
          >
            {" "}
            <li>Blogs</li>
          </NavLink>
        </ul>
      </div>
      <div className="text-center font-bold text-xl flex items-center justify-center gap-2">
        {user && (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{user?.displayName}</Tooltip>}
          >
            <img src={user.photoURL} className="h-14 rounded-full" alt="" />
          </OverlayTrigger>
        )}
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn border-0 hover:bg-orange-500"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn border-0 hover:bg-orange-500">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
