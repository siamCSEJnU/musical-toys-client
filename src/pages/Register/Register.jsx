import { Form, Link, Navigate, useNavigate } from "react-router-dom";
import register from "../../assets/register/register.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [regError, setRegError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name, photo);
    if (password.length < 6) {
      setRegError("Please use at least 6 characters in your password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setRegError("");
        form.reset();
        updateUserData(createdUser, name, photo);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
        setRegError(error.message);
      });
  };

  const updateUserData = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        console.log("user profile updated");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Form
      onSubmit={handleRegister}
      className=" md:flex w-2/3 mx-auto items-center "
    >
      <div className=" ">
        <img className="h-1/2" src={register} alt="" />
      </div>
      <div className=" space-y-4 md:w-1/2 bg-slate-200 p-5 rounded-lg ">
        <h2 className="text-4xl font-bold text-slate-700">Sign Up here!</h2>
        <div className="space-y-2">
          <label>
            <span className="text-xl font-semibold text-slate-700">Name</span>
          </label>
          <br />
          <input
            type="text"
            className="border-0 rounded-md p-3 w-4/5"
            name="name"
            placeholder="your name"
            id=""
          />
        </div>
        <div className="space-y-2">
          <label>
            <span className="text-xl font-semibold text-slate-700">
              Photo URL
            </span>
          </label>
          <br />
          <input
            type="text"
            className="border-0 rounded-md p-3 w-4/5"
            name="photo"
            placeholder="your photo url"
            id=""
          />
        </div>
        <div className="space-y-2">
          <label>
            <span className="text-xl font-semibold text-slate-700">Email</span>
          </label>
          <br />
          <input
            type="email"
            className="border-0 rounded-md p-3 w-4/5"
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
            className="border-0 rounded-md p-3 w-4/5"
            placeholder="your password"
            id=""
          />
        </div>
        <p className="font-semibold text-red-700">{regError}</p>
        <input
          type="submit"
          value="sign Up"
          className="btn hover:bg-orange-500 border-0 w-4/5"
        />
        <p className="font-semibold">
          Already registered?{" "}
          <Link to="/login" className="text-blue-800 italic">
            Sign In
          </Link>{" "}
          here
        </p>
      </div>
    </Form>
  );
};

export default Register;
