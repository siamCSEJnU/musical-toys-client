import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/MainLayout/Main";
import Error from "../Layouts/ErrorLayout/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
