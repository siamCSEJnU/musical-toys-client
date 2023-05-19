import { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      <div className="text-center space-y-10 mb-10">
        <h2 className="text-4xl font-bold t text-slate-700 ">
          All Toys Here!!
        </h2>
        <input
          type="text"
          name="search"
          id=""
          className=" outline-0 rounded-md p-3 w-1/5 bg-slate-300 "
        />
        <input
          type="submit"
          className="btn hover:bg-orange-500 ms-2"
          value="search"
        />
      </div>

      <div className="grid  md:grid-cols-3 gap-8">
        {toys.slice(0, 20).map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
