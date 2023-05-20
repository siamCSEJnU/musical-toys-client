import { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  useTitle("Add Toy");
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
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
    const tags = form.tags.value;
    const toy = {
      toyName,
      seller_name: sellerName,
      seller_email: sellerEmail,
      price,
      rating,
      photo_url: url,
      details,
      quantity,
      category,
      tags,
    };
    Swal.fire({
      icon: "errors",
      confirmButtonText: "Cool",
      title: "Are you sure want to add the toy??",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/addToy", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(toy),
        })
          .then((res) => res.json())
          .then((data) => {
            form.reset();
            if (data.insertedId) {
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
        Add A Toy
      </h2>
      <Form onSubmit={handleSubmit} className="bg-slate-200 w-4/5 mx-auto">
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
              required
              id=""
              placeholder="Toy name"
              className="rounded-md p-3 outline-0 border-0 w-2/3 "
            />
          </div>
          <div className="space-y-2">
            <label>
              <span className="text-xl font-semibold  text-slate-700">
                Toy Picture URL{" "}
              </span>
            </label>
            <br />
            <input
              type="text"
              name="url"
              required
              id=""
              placeholder="Photo url"
              className="rounded-md p-3 outline-0 border-0 w-2/3 "
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
              required
              placeholder="Seller name"
              defaultValue={user?.displayName}
              className="rounded-md p-3 outline-0 border-0 w-2/3"
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
              required
              placeholder="Seller email"
              defaultValue={user?.email}
              className="rounded-md p-3 outline-0 border-0 w-2/3"
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
              required
              placeholder="piano,guitar,violin,drums etc"
              className="rounded-md p-3 outline-0 border-0 w-2/3"
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
              required
              placeholder="Toy price"
              className="rounded-md p-3 outline-0 border-0 w-2/3"
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
              placeholder="rating"
              className="rounded-md p-3 outline-0 border-0 w-2/3"
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
              placeholder="available quantity "
              className="rounded-md p-3 outline-0 border-0 w-2/3"
            />
          </div>
          <div className="space-y-2">
            <label>
              <span className="text-xl font-semibold text-slate-700">Tags</span>
            </label>
            <br />
            <input
              type="text"
              name="tags"
              id=""
              placeholder="new or old"
              className="rounded-md p-3 outline-0 border-0 w-2/3"
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
              className="w-2/3 rounded-md outline-0 border-0"
              name="details"
              id=""
              required
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
            value="Add Toy"
          />
        </div>
      </Form>
    </div>
  );
};

export default AddToy;
