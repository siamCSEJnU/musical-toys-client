import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Musical Toys | ${title}`;
  }, [title]);
};

export default useTitle;
