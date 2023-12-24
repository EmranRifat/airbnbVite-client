import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../Login/Login";
import Signup from "../Login/SignUp";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/signup",
      element: <Signup></Signup>,
    },
    
  ]);

export default router;