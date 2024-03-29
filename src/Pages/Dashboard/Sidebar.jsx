/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import { Link, Navigate, useNavigate } from "react-router-dom";
// import AdminMenu from "./AdminMenu";
// import UserMenu from "./UserMenu";
// import HostMenu from "./HostMenu";
import { AuthContext } from "../../Provider/AuthProvider";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import AdminMenu from "../../Components/Dashboard/AdminMenu";
import HostMenu from "../../Components/Dashboard/HostMenu";
import UserMenu from "./UserMenu";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ role }) => {
  const [isActive, setIsActive] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(user);
  const handleToggle = () => {
    setIsActive(!isActive);
  };


  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">AirCnC</Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <h2 className="text-3xl cursor-pointer font-semibold text-center text-gray-800 ">
              <Link
                to="/"
                className="flex title-font  items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 md:mb-0"
              >
                <span className="ml-3 text-2xl font-bold ">AirCnc</span>
              </Link>
            </h2>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p>
                <small className="text-blue-500 font-semibold">{role}</small>
              </p>

              <Link to="/dashboard">
                <h4 className="mx-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {role && role !== "requested" ? (
                <>{role === "admin" ? <AdminMenu /> : <HostMenu />} </>
              ) : (
                <UserMenu />
              )}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <PrimaryButton 
            classes="flex abc block w-full rounded-full items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform"
          
          >
            <ArrowRightOnRectangleIcon
             className="w-5 h-5" />

            <span 
               onClick={() => {
                        toast.success("SignOut Successfully...");
                        navigate("/login");
                        logOut();
                      }}
            className="mx-4 font-medium">Logout</span>
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
