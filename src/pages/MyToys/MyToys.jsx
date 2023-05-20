import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user, toys } = useContext(AuthContext);

  const myToys = toys.filter((toy) => toy.seller_email == user.email);

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
            <MyToysRow key={myToy._id} myToy={myToy}></MyToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
