import React from "react";
import { Form } from "react-router-dom";

const AddToy = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-slate-600 text-center mb-10">
        Add A Toy
      </h2>
      <Form className="bg-slate-200 w-4/5 mx-auto">
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
              className="rounded-md p-3 outline-0 w-2/3 "
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
              className="rounded-md p-3 outline-0 w-2/3 "
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
              className="rounded-md p-3 outline-0 w-2/3"
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
              className="rounded-md p-3 outline-0 w-2/3"
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
              placeholder="piano,guitar,violin or drums"
              className="rounded-md p-3 outline-0 w-2/3"
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
              placeholder="Toy price"
              className="rounded-md p-3 outline-0 w-2/3"
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
              className="rounded-md p-3 outline-0 w-2/3"
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
              className="rounded-md p-3 outline-0 w-2/3"
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
              className="w-2/3 rounded-md outline-0"
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
            className="btn hover:bg-orange-500 outline-0 w-1/2 "
            type="submit"
            value="Submit"
          />
        </div>
      </Form>
    </div>
  );
};

export default AddToy;
