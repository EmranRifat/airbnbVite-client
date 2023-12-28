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
import DashboardLayout from "../Layout/DashboardLayout";
import Welcome from "../Pages/Dashboard/Welcome";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../Components/Dashboard/MyBookings";
import BecomeAHost from "../Components/Dashboard/BecomeAHost";

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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "my-bookings",
        element:<PrivateRoute><MyBookings/></PrivateRoute> ,
      },

      {
        path: "become-host",
        element: <PrivateRoute><BecomeAHost/></PrivateRoute>,
      },
       
      
    ],
  },
]);
export default router;
