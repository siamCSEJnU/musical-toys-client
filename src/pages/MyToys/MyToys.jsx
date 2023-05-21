import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import useTitle from "../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  // const toys = useLoaderData();
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://musical-toys-server-siamcsejnu.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const myToys = toys?.filter((toy) => toy.seller_email == user.email);
  if (!myToys) {
    return (
      <div className="text-center">
        <progress className="progress w-1/2 "></progress>
      </div>
    );
  }

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
      <table className="table w-full ">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
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
