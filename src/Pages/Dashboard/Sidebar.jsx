import  { useContext, useState } from "react";
import {  ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/solid'

import { Link } from "react-router-dom";
// import AdminMenu from "./AdminMenu";
// import UserMenu from "./UserMenu";
// import HostMenu from "./HostMenu";
import { AuthContext } from "../../Provider/AuthProvider";
import PrimaryButton from "../../Components/Button/PrimaryButton";

// eslint-disable-next-line react/prop-types
const Sidebar = ({role,loading}) => {

 const [isActive, setActive] = useState('false');

  const { user } = useContext(AuthContext);
  console.log(role);
  
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
    {/* Small Screen Navbar */}
    <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
      <div>
        <div className='block cursor-pointer p-4 font-bold'>
          <Link to='/'>AirCnC</Link>
        </div>
      </div>

      <button
        onClick={handleToggle}
        className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'
      >
        <Bars3Icon className='h-5 w-5' />
      </button>
    </div>
    {/* Sidebar */}
    <div
      className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
        isActive && '-translate-x-full'
      }  md:translate-x-0  transition duration-200 ease-in-out`}
    >
      <div>
        {/* Branding & Profile Info */}
        <div>
          <h2 className='text-3xl cursor-pointer font-semibold text-center text-gray-800 '>
          <Link
          to='/'
          className='flex title-font  items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 md:mb-0'
        >
          <span className='ml-3 text-2xl font-bold '>AirCnc</span>
        </Link>

          </h2>
          <div className='flex flex-col items-center mt-6 -mx-2'>
            <Link to='/dashboard'>
              <img
                className='object-cover w-24 h-24 mx-2 rounded-full'
                src={user?.photoURL}
                alt='avatar'
                referrerPolicy='no-referrer'
              />
            </Link>
            <Link to='/dashboard'>
              <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                {user?.displayName}
              </h4>
            </Link>
            <Link to='/dashboard'>
              <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                {user?.email}
              </p>
            </Link>
          </div>
        </div>

        {/* Nav Items */}
        <div className='flex flex-col justify-between flex-1 mt-6'>
          <nav>
            {/* {role && role !== 'requested' ? (
              <>{role === 'admin' ? <AdminMenu /> : <HostMenu />} </>
            ) : (
              <UserMenu />
            )} */}
          </nav>
          <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
            <Link to="/dashboard/my-bookings" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" href="#">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span className="mx-4 font-medium">My Bookings</span>
            </Link>

            <Link to="/dashboard/become-host" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Become a host</span>
            </Link>

          

          
        </nav>
    </div>
        </div>
      </div>

      <div>
        <hr />
        <PrimaryButton
          classes='flex block w-full rounded-full items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform'
        >
          <ArrowRightOnRectangleIcon className='w-5 h-5' />

          <span className='mx-4 font-medium'>Logout</span>
        </PrimaryButton>
      </div>
    </div>
  </>
  );
};

export default Sidebar;
