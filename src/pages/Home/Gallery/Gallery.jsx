import { GalleryData } from "../../../GalleryData";

import { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setGalleryImages(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
  }, []);

  const galleryFilter = (title) => {
    const filteredData = GalleryData.filter((item) => item.title === title);
    setGalleryImages(filteredData);
  };
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">Gallery</h2>

      <div className="w-1/3 mx-auto ">
        <ul className="flex justify-center  gap-5 mb-5">
          <li>
            <button
              onClick={() => setGalleryImages(GalleryData)}
              className="btn bg-slate-700  hover:bg-orange-400 border-0"
            >
              All
            </button>
          </li>
          {collection.map((title) => (
            <li key={title}>
              <button
                onClick={() => galleryFilter(title)}
                className="btn bg-slate-800 hover:bg-orange-500 border-0"
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {galleryImages.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt=""
              className="object-cover"
              style={{ height: "200px", width: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;