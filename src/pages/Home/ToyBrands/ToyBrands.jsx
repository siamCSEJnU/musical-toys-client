import Brand1 from "../../../assets/Brands/Brand1.jpg";
import Brand2 from "../../../assets/Brands/Brand2.jpg";
import Brand3 from "../../../assets/Brands/Brand3.jpg";
import Brand4 from "../../../assets/Brands/Brand4.jpg";

const ToyBrands = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-10 text-center ">Our Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div className="border p-3 bg-slate-300 rounded-lg  space-y-3">
          <div>
            <img
              src={Brand1}
              className="w-full rounded-lg"
              style={{ height: "17rem" }}
              alt=""
            />
          </div>
          <div className="space-y-4 text-slate-800">
            <h2 className="text-2xl font-semibold">Brand-1</h2>
            <p className=" font-semibold">
              {" "}
              Experience the joy of music with our innovative toys
            </p>
            <div className="text-end">
              <button className="btn hover:bg-orange-500 border-0 outline-0 m-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="border p-3 bg-slate-300 rounded-lg  space-y-3">
          <div>
            <img
              src={Brand2}
              className="w-full rounded-lg"
              style={{ height: "17rem" }}
              alt=""
            />
          </div>
          <div className="space-y-4 text-slate-800">
            <h2 className="text-2xl font-semibold">Brand-2</h2>
            <p className=" font-semibold">
              {" "}
              Experience the joy of music with our innovative toys
            </p>
            <div className="text-end">
              <button className="btn hover:bg-orange-500 border-0 outline-0 m-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="border p-3 bg-slate-300 rounded-lg  space-y-3">
          <div>
            <img
              src={Brand3}
              className="w-full rounded-lg"
              style={{ height: "17rem" }}
              alt=""
            />
          </div>
          <div className="space-y-4 text-slate-800">
            <h2 className="text-2xl font-semibold">Brand-3</h2>
            <p className=" font-semibold">
              {" "}
              Experience the joy of music with our innovative toys
            </p>
            <div className="text-end">
              <button className="btn hover:bg-orange-500 border-0 outline-0 m-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="border p-3 bg-slate-300 rounded-lg  space-y-3">
          <div>
            <img
              src={Brand4}
              className="w-full rounded-lg  "
              style={{ height: "17rem" }}
              alt=""
            />
          </div>
          <div className="space-y-4 text-slate-800">
            <h2 className="text-2xl font-semibold">Brand-1</h2>
            <p className=" font-semibold">
              {" "}
              Experience the joy of music with our innovative toys
            </p>
            <div className="text-end">
              <button className="btn hover:bg-orange-500 border-0 outline-0 m-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyBrands;
