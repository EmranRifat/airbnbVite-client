/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-hot-toast";
import DeleteModal from "./Modal/DeleteModal";
import { deleteBooking } from "../Api/Bookings";
import { format } from "date-fns";

const TableRow = ({ booking, fetchBookings }) => {
  let [isOpen, setIsOpen] = useState(false);

  console.log(booking);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const modalHandler = (id) => {
    // console.log(id);
    deleteBooking(id).then((data) => {
      console.log(data);
      fetchBookings();
      toast.success("Your booking is Canceled..");
    });
    closeModal();
  };
  // console.log(booking);
  return (
    <tr>
      {/* <p className="text-gray-900 ml-5 mt-10 whitespace-no-wrap">{index}</p> */}

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

        <div className="flex items-center">

          <div className="flex-shrink-0">

            <div className="block relative">
              <img
                alt="profile"
                src={booking?.home?.image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {booking?.home?.title}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {booking?.home?.location}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {booking?.guestEmail}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${booking?.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {format(new Date(booking?.home?.from), "P")}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {" "}
          {format(new Date(booking?.home?.to), "P")}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={openModal}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Cancel</span>
        </span>
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          modalHandler={modalHandler}
          id={booking?._id}
        />
      </td>
    </tr>
  );
};

export default TableRow;
