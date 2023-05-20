import { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";
import { Form } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");

  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    setSearchQuery(search);
    console.log(search);
  };
  const filteredToys = searchQuery
    ? toys.filter(
        (toy) =>
          toy.toyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          toy.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : toys.slice(0, 20);
  return (
    <div>
      <div className="text-center space-y-10 mb-10">
        <h2 className="text-4xl font-bold t text-slate-700 ">
          All Toys Here!!
        </h2>
        <Form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            id=""
            // value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" border-0 rounded-md p-3 w-1/5 bg-slate-200 "
          />
          <input
            type="submit"
            className="btn border-0 hover:bg-orange-500 ms-2"
            value="search"
          />
        </Form>
      </div>

      <div className="grid  md:grid-cols-3 gap-8">
        {filteredToys.length > 0 ? (
          filteredToys.map((toy) => <ToyCard key={toy._id} toy={toy}></ToyCard>)
        ) : (
          <p className="text-red-800 italic text-xl font-semibold">
            {searchQuery
              ? "Invalid search!! No matching toys found."
              : "Empty input. Please enter a search query."}
          </p>
        )}
      </div>
    </div>
  );
};

export default AllToys;
