/* eslint-disable react/no-unescaped-entities */
import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getBookings } from "../../Api/Bookings";
import TableRow from "../../Components/TableRow";

const AllBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  


  useEffect(() => {
    setLoading(true);
    getBookings()
    .then((data) => {
      setBookings(data);
      setLoading(false);
    })
    
  
  }, [user]);



  return (
   <>
     {bookings &&bookings.length>0?( 
      <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
           
           
           
           {
            loading?(<div className="text-center text-gray-600 py-5" >  Loading bookings...</div>):(
                <>
                <table className="min-w-full leading-normal">
              <thead>
                <tr>
               
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Location
                  </th>
                  <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    From
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    To
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
              {
               bookings&&
               bookings.map((booking,index)=>(
                <TableRow
                  index={index+1}
                  booking={booking}
                  key={booking._id}
                />
               ))
              }
              </tbody>
            </table>
                </>  
           
            )}
           
       
          </div>
        </div>
      </div>
    </div>
    ):(
      <>
          <div className='h-screen text-gray-600 gap-5 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl'>
            There's no booking data available right now.
          </div>
        </>
    )

     }
   </>
  );
};

export default AllBookings;
