import { useEffect, useState } from "react";

import LatestToyCard from "./LatestToyCard";

const LatestToys = () => {
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
      <h2 className="text-4xl font-bold mb-10 mt-5 text-center ">
        What's Latest Now?
      </h2>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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
