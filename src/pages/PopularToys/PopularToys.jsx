import Marquee from "react-fast-marquee";
import popular1 from "../../assets/popular/drums3.jpg";
import popular2 from "../../assets/popular/guitar5.jpg";
import popular3 from "../../assets/popular/piano3.jpg";
import popular4 from "../../assets/popular/guitar6.jpg";
import popular5 from "../../assets/popular/piano2.jpg";

const PopularToys = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold  text-center mb-10 ">
        Popular & Trending
      </h2>
      <Marquee speed={150}>
        <div className="mx-8">
          <img className="h-72 " src={popular1} alt="" />
        </div>
        <div className="mx-8">
          <img className="h-72" src={popular2} alt="" />
        </div>
        <div className="mx-8">
          <img className="h-72" src={popular3} alt="" />
        </div>
        <div className="mx-8">
          <img className="h-72" src={popular4} alt="" />
        </div>
        <div className="mx-8">
          <img className="h-72" src={popular5} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default PopularToys;
