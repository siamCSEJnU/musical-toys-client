import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import guitar3 from "../../../../public/Gallery/guitar3.jpg";
import guitar2 from "../../../../public/Gallery/guitar2.jpg";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import CategoryShopCard from "../../CategoryShopCard/CategoryShopCard";

const CategoryShop = () => {
  const [toys, setToys] = useState([]);
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    setCollection([...new Set(toys.map((toy) => toy.category))]);
  }, []);
  // const guitarToys = toys
  //   ?.slice(0, 3)
  //   .filter((toy) => toy.category.toLowerCase() === Guitar.toLowerCase());

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 text-center">Shop By Category</h2>
      <Tabs className="text-center">
        <TabList className="text-2xl font-semibold bg-orange-200">
          {collection.map((category) => (
            <Tab key={category}>{category}</Tab>
          ))}
        </TabList>
        {collection.map((category) => (
          <TabPanel key={category}>
            <div className="flex md:flex-row flex-col justify-center gap-10 md:gap-20 items-center mt-12">
              {toys
                ?.filter(
                  (toy) => toy.category.toLowerCase() === category.toLowerCase()
                )
                .slice(0, 2)
                .map((toy) => (
                  <CategoryShopCard key={toy._id} toy={toy}></CategoryShopCard>
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryShop;
