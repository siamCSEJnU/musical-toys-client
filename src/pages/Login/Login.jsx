import { Link } from "react-router-dom";
import login from "../../assets/login/login.jpg";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div className=" md:flex w-2/3 mx-auto items-center ">
      <div className=" ">
        <img className="h-1/2" src={login} alt="" />
      </div>
      <div className=" space-y-4 w-1/2 bg-orange-300 p-5 rounded-lg ">
        <h2 className="text-4xl font-bold text-slate-700">Login here!</h2>
        <div className="space-y-2">
          <label>
            <span className="text-xl font-semibold text-slate-700">Email</span>
          </label>
          <br />
          <input
            type="email"
            className="outline-0 rounded-md p-3 w-4/5"
            name="email"
            placeholder="your eamil"
            id=""
          />
        </div>
        <div className="space-y-2">
          <label>
            <span className="text-xl font-semibold text-slate-700">
              Password
            </span>
          </label>
          <br />
          <input
            type="password"
            name="password"
            className="outline-0 rounded-md p-3 w-4/5"
            placeholder="your password"
            id=""
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn hover:bg-lime-600 border-0 w-4/5"
        />
        <p className="font-semibold">
          New to Musical Toys?{" "}
          <Link to="/register" className="text-blue-800 italic">
            Register
          </Link>{" "}
          <br /> or,
        </p>
        <div>
          <button className="flex items-center gap-4 border-slate-600 hover:border-orange-400  rounded-md border-2 w-4/5 ps-3 ">
            <FaGoogle className="text-orange-600" />{" "}
            <span className="bg-slate-600 hover:bg-orange-500  p-2 w-full text-white">
              Sign In with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
