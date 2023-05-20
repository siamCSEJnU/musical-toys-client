import { useContext, useRef } from "react";
import { Form, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  useTitle("Update Toy");
  const { toys, setToys } = useContext(AuthContext);
  const id = useParams().id;

  const targetToy = toys?.find((toy) => toy._id == id);
  if (!targetToy) {
    return (
      <div className="text-center">
        <progress className="progress w-1/2 h-5"></progress>
      </div>
    );
  }

  const {
    _id,
    category,
    photo_url,
    price,
    quantity,
    rating,
    toyName,
    seller_name,
    seller_email,
  } = targetToy;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const sellerEmail = form.sellerEmail.value;
    const url = form.url.value;
    const details = form.details.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const updatedToy = {
      toyName,
      seller_name: sellerName,
      seller_email: sellerEmail,
      price,
      rating,
      photo_url: url,
      details,
      quantity,
      category,
    };
    Swal.fire({
      icon: "errors",
      confirmButtonText: "Cool",
      title: "Are you sure want to update the toy??",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/updateToy/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedToy),
        })
          .then((res) => res.json())
          .then((data) => {
            form.reset();
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "success!",
                text: "Toy Added Successfully",
                icon: "success",
                confirmButtonText: "cool",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-slate-600 text-center mb-10">
        Update The Toy
      </h2>
      <Form onSubmit={handleUpdate} className="bg-slate-200 w-4/5 mx-auto">
        <div className="md:grid grid-cols-2  ps-20 py-5 space-y-3 ">
          <div className="space-y-2 ">
            <label>
              <span className="text-xl font-semibold text-slate-700">
                Toy Name
              </span>
            </label>
            <br />
            <input
              type="text"
              name="toyName"
              id=""
              placeholder="Toy name"
              defaultValue={toyName}
              className="rounded-md p-3 border-0 w-2/3 "
            />
          </div>
          <div className="space-y-2">
            <label>
              <span className="text-xl font-semibold text-slate-700">
                Toy Picture URL{" "}
              </span>
            </label>
            <br />
            <input
              type="text"
              name="url"
              id=""
              placeholder="Photo url"
              defaultValue={photo_url}
              className="rounded-md p-3 border-0 w-2/3 "
            />
          </div>
          <div className="space-y-2">
            <label>
              <span className="text-xl font-semibold text-slate-700">
                Seller Name
              </span>
            </label>
            <br />
            <input
              type="text"
              name="sellerName"
              id=""
              placeholder="Seller name"
              defaultValue={seller_name}
              className="rounded-md p-3 border-0 w-2/3"
            />
          </div>
          <div className="space-y-2">
            <label>
              <span className="text-xl font-semibold text-slate-700">
                Seller Email
              </span>
            </label>
            <br />
            <input
              type="email"
              name="sellerEmail"
              id=""
              placeholder="Seller email"
              defaultValue={seller_email}
              className="rounded-md p-3 border-0 w-2/3"
            />
          </div>
          <div className="space-y-2">
            <label>
              <span className="text-xl font-semibold text-slate-700">
                Sub-category
              </span>
            </label>
            <br />
            <input
              type="text"
              name="category"
              id=""
              defaultValue={category}
              placeholder="piano,guitar,violin,drums etc"
              className="rounded-md p-3 border-0 w-2/3"
            />
          </div>
          <div className="space-y-2">
            <label>
              <span className="text-xl font-semibold text-slate-700">
                Price
              </span>
            </label>
            <br />
            <input
              type="text"
              name="price"
              id=""
              defaultValue={price}
              placeholder="Toy price"
              className="rounded-md p-3 border-0 w-2/3"
            />
          </div>
          <div className="space-y-2">
            <label>
              <span className="text-xl font-semibold text-slate-700">
                Rating
              </span>
            </label>
            <br />
            <input
              type="text"
              name="rating"
              id=""
              defaultValue={rating}
              placeholder="rating"
              className="rounded-md p-3 border-0 w-2/3"
            />
          </div>
          <div className="space-y-2">
            <label>
              <span className="text-xl font-semibold text-slate-700">
                Available Quantity
              </span>
            </label>
            <br />
            <input
              type="text"
              name="quantity"
              id=""
              defaultValue={quantity}
              placeholder="available quantity "
              className="rounded-md p-3 border-0 w-2/3"
            />
          </div>
          <div className="space-y-2">
            <label>
              <span className="text-xl font-semibold text-slate-700">
                Detail description
              </span>
            </label>
            <br />
            <textarea
              className="w-2/3 rounded-md border-0"
              name="details"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>{" "}
        </div>
        <div className="text-center w-2/3 mx-auto pb-10">
          {" "}
          <input
            className="btn hover:bg-orange-500 border-0 w-1/2 "
            type="submit"
            value="Update Toy"
          />
        </div>
      </Form>
    </div>
  );
};

export default UpdateToy;
