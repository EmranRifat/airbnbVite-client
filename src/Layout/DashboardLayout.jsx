import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { getUserRole } from "../Api/User";
import SmallSpinner from "../Components/Spinner/SmallSpinner";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    getUserRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  return (
    <div className="md:flex relative min-h-screen">
      {loading ? (
        <SmallSpinner></SmallSpinner>
      ) : (
        <Sidebar role={role}></Sidebar>
      )}
      <div className="flex-1 md:ml-64 ">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
