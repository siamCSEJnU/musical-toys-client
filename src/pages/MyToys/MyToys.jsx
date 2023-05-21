import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [sortedByPrice, setSortedByPrice] = useState(null);

  // const toys = useLoaderData();
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://musical-toys-server-siamcsejnu.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const myToys = toys?.filter((toy) => toy.seller_email == user.email);
  if (!myToys) {
    return (
      <div className="text-center">
        <progress className="progress w-1/2 "></progress>
      </div>
    );
  }
  const handleSortByPrice = (sortBy) => {
    let sortedToys;
    if (sortBy === "low") {
      sortedToys = [
        ...myToys.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)),
      ];
      setSortedByPrice("low");
    } else if (sortBy === "high") {
      sortedToys = [
        ...myToys.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)),
      ];
      setSortedByPrice("high");
    } else {
      sortedToys = [...myToys];
      setSortedByPrice(null);
    }
    setToys(sortedToys);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "errors",
      confirmButtonText: "Cool",
      title: "Are you sure want to delete this??",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://musical-toys-server-siamcsejnu.vercel.app/allToys/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remainingToys = toys.filter((toy) => toy._id !== id);
              setToys(remainingToys);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto  w-full">
      <div className="flex justify-end items-center mb-4">
        <h2 className="italic mr-2 font-semibold text-lg text-slate-600">
          Sort By <br /> (price)
        </h2>
        <h2 className=" mr-2 font-semibold text-2xl text-slate-600">:</h2>
        <button
          onClick={() => handleSortByPrice("low")}
          className={`btn ${
            sortedByPrice === "low"
              ? "bg-slate-700 text-white outline-0 border-0"
              : "bg-slate-300 text-slate-800 outline-0 border-0"
          } mr-2`}
        >
          Low
        </button>
        <button
          onClick={() => handleSortByPrice("high")}
          className={`btn ${
            sortedByPrice === "high"
              ? "bg-slate-700 text-white outline-0 border-0"
              : "bg-slate-300 text-slate-800 outline-0 border-0"
          }`}
        >
          High
        </button>
      </div>
      <table className="table w-full ">
        {/* head */}
        <thead>
          <tr>
            <th className="text-lg bg-slate-200 text-slate-800">Delete</th>
            <th className="text-lg bg-slate-200 text-slate-800">My Toys</th>
            <th className="text-lg bg-slate-200 text-slate-800">Seller</th>
            <th className="text-lg bg-slate-200 text-slate-800">Email</th>
            <th className="text-lg bg-slate-200 text-slate-800">Category</th>
            <th className="text-lg bg-slate-200 text-slate-800">Price</th>
            <th className="text-lg bg-slate-200 text-slate-800">Available</th>
            <th className="text-lg bg-slate-200 text-slate-800">Rating</th>
            <th className="text-lg bg-slate-200 text-slate-800">Edit</th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((myToy) => (
            <MyToysRow
              key={myToy._id}
              myToy={myToy}
              handleDelete={handleDelete}
            ></MyToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
