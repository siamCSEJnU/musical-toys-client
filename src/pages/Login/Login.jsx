import { Form, Link } from "react-router-dom";
import login from "../../assets/login/login.jpg";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const { setUser, GoogleSignIn, ManualSignIn, logError, setLogError } =
    useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    ManualSignIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setLogError("");
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
        setLogError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form
      onSubmit={handleLogin}
      className=" md:flex w-2/3 mx-auto items-center "
    >
      <div className=" ">
        <img className="h-1/2" src={login} alt="" />
      </div>
      <div className=" space-y-4 md:w-1/2 bg-orange-300 p-5 rounded-lg ">
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
        <p className="text-red-700 w-4/5">{logError}</p>
        <input
          type="submit"
          value="Login"
          className="btn hover:bg-orange-500 border-0 w-4/5"
        />
        <p className="font-semibold">
          New to Musical Toys?{" "}
          <Link to="/register" className="text-blue-800 italic">
            Register
          </Link>{" "}
          <br /> or,
        </p>
        <div>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-4 border-slate-700 hover:border-orange-400  rounded-md border-2 w-4/5 ps-3 "
          >
            <FaGoogle className="text-orange-600" />{" "}
            <span className="bg-slate-700 hover:bg-orange-500  p-2 w-full text-white">
              Sign In with Google
            </span>
          </button>
        </div>
      </div>
    </Form>
  );
};

export default Login;
