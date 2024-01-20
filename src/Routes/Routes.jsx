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
import BecomeAHost from "../Components/Dashboard/BecomeAHost";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AllBookings from "../Pages/Dashboard/AllBookings";
import AddHome from "../Pages/Dashboard/AddHome";
import ManageHome from "../Pages/Dashboard/Manage-Home";
import AllHome from "../Pages/Dashboard/AllHome";
import MyBookings from "../Pages/Dashboard/MyBookings";

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
        path: "/all-homes",
        element: <AllHome />,
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
        path: "/service-details/:id",
        element: <Details />,
        loader: ({ params }) => {
          return fetch(
            `http://localhost:5000/home/${params.id}`
          );
        },
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
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "all-bookings",
        element: <AllBookings />,
      },
      {
        path: "add-home",
        element: <AddHome />,
      },
      {
        path: "all-home",
        element: <AllHome />,
      },
      {
        path: "manage-homes",
        element: <ManageHome />,
      },
       
      
    ],
  },
]);
export default router;
