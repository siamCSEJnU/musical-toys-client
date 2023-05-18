import React from "react";
import error from "../../assets/error.jpg";

const Error = () => {
  return (
    <div className="flex items-center justify-center mt-24 ">
      <img src={error} alt="error" style={{ height: "500px" }} />
    </div>
  );
};

export default Error;
