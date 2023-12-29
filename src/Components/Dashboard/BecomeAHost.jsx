import { useContext, useEffect, useState } from "react";
import { getImageUrl } from "../../Api/imageUpload";
import BecomeHostForm from "../Form/BecomeHostForm";
import { AuthContext } from "../../Provider/AuthProvider";
import { getUserRole, hostRequest } from "../../Api/User";
import { Watch } from 'react-loader-spinner'

const BecomeAHost = () => {
  const { user } = useContext(AuthContext);
  const [loading,setLoading]=useState(true);
  const [role,setRole]=useState(null);

  useEffect(()=>{
    getUserRole(user?.email)
    .then(data=>{
       setRole(data)
      setLoading(false)
    })
  },[user])

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];
    getImageUrl(image).then((data) => {
      const hostData = {
        location: location,
        documentImg: data,
        role: "requested",
        email: user?.email,
      };
      hostRequest(hostData).then((data) => console.log(data));
    });
  };

  return (
    <>
     
     {role?(
      <div className="h-screen  text-gray-500 flex flex-col  justify-center items-center text-xl  lg:text-3xl ">Request sent,wait for admin approval
      <div className="mt-4 ">
      <Watch
  visible={true}
  height="80" 
  width="80"
  radius="48"
  color="#4fa94d"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
      </div>
      
      </div>
     
     ):(
      <>{ !loading &&  <BecomeHostForm handleSubmit={handleSubmit} />}</>
      ) }
    </>
  );
};

export default BecomeAHost;
