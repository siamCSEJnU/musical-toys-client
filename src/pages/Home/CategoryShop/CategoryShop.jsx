import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import guitar3 from "../../../../public/Gallery/guitar3.jpg";
import guitar2 from "../../../../public/Gallery/guitar2.jpg";
import { FaStar } from "react-icons/fa";

const CategoryShop = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 text-center">Shop By Category</h2>
      <Tabs className="text-center">
        <TabList className="text-2xl font-semibold bg-orange-200">
          <Tab>Guitar</Tab>
          <Tab>Drums</Tab>
          <Tab>Piano</Tab>
        </TabList>

        <TabPanel>
          <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={guitar3}
                  className="h-60 w-full p-3 rounded-3xl"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body text-stone-600">
                <h2 className="text-start font-semibold text-2xl">Guitar1</h2>
                <p className="text-lg  text-start ">Price :$80</p>
                <p className="text-lg text-start ">Rating :4.5</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-yellow-600 border-0">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryShop;
