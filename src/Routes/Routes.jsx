import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../Login/Login";
import Signup from "../Login/SignUp";
import ComingSoon from "../Shared/CommingSoon";
import ErrorPage from "../Shared/ErrorPage";
import Main from "../Layout/Main";
import Details from "../Pages/Home/Details";
import SearchResult from "../Pages/SearchResult";
import Checkout from "../Pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/service-details",
        element: <Details />,
      },
    
      {
        path: "/search-Result",
        element: <SearchResult />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
export default router;
