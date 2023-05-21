import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import new3 from "../../../assets/newLogo/new3.jpg";

import LatestToyCard from "./LatestToyCard";

const LatestToys = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [toys, setToys] = useState([]);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    fetch("https://musical-toys-server-siamcsejnu.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        if (clicked) {
          setToys(data);
        } else {
          setToys(data.slice(0, 6));
        }
      });
  }, [clicked]);
  const latestToys = toys?.filter((toy) => toy.tags == "new");
  console.log(latestToys);

  if (!latestToys) {
    return (
      <div className="text-center">
        <progress className="progress w-1/2 h-5"></progress>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-bold  text-center ">What's Latest Now?</h2>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="800"
        >
          <img src={new3} className="h-36" alt="" />
        </div>
      </div>

      <div className=" flex flex-wrap gap-4 md:grid md:grid-cols-4 md:gap-8">
        {/* <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"> */}
        {latestToys.map((toy) => (
          <LatestToyCard key={toy._id} toy={toy}></LatestToyCard>
        ))}
      </div>
      {!clicked && (
        <div className="text-center pt-10">
          <button
            onClick={() => setClicked(!clicked)}
            className="btn hover:bg-orange-500 outline-0 border-0 "
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestToys;
