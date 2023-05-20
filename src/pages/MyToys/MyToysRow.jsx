import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyToysRow = ({ myToy }) => {
  const { toys, setToys } = useContext(AuthContext);
  const {
    _id,
    category,
    photo_url,
    price,
    quantity,
    rating,
    seller_email,
    seller_name,
    toyName,
  } = myToy;

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
        fetch(`http://localhost:5000/allToys/${id}`, {
          method: "DELETE",
        })
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
    <tr className="text-lg  text-slate-700 font-semibold">
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm hover:bg-orange-500 border-0 btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={photo_url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl text-slate-700">{toyName}</div>
            {/* <div className="text-sm opacity-50">United States</div> */}
          </div>
        </div>
      </td>
      <td className="text-xl"> {seller_name}</td>
      <td className="italic">{seller_email}</td>
      <td>{category}</td>
      <td>{"$" + price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>
        <button>
          <FaEdit></FaEdit>
        </button>
      </td>
    </tr>
  );
};

export default MyToysRow;
