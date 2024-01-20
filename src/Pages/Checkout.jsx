/* eslint-disable react/no-unescaped-entities */
import { Fragment, useContext, useState } from "react";
import { Tab } from "@headlessui/react";
// import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import CheckoutCart from "../Components/Checkout/CheckoutCart";
import ReviewHouse from "../Components/Checkout/ReviewHouse";
import WhosComing from "../Components/Checkout/WhosComing";
// import Payment from "../Components/Checkout/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
// import { saveBooking } from "../Api/Bookings";
import CheckOutForm from "../Components/Form/CheckOutForm";
const Checkout = () => {
  const { state } = useLocation();
  const checkoutData = state?.homeData;
  const { user } = useContext(AuthContext);
  const stripePromise = loadStripe('pk_test_51N5QVYDX9IxjuKwgwS9MxJ3nGWiFfiIm9jaEIQmZq4XutYJJvpImADkiNiGiSkziKbEPYbDMBDvhKnWIuF1x3LlZ00gcdT1Nr0')

  const [bookingData, setBookingData] = useState({
    homeId: checkoutData?._id,
    hostEmail: checkoutData?.host?.email,
    title:checkoutData?.title,
    image:checkoutData?.image,
    message: "",
    price: parseFloat(checkoutData.price) + 31,
    guestEmail: user?.email,
    home: checkoutData,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // const handleBooking = () => {
  //   saveBooking(bookingData)
  //     .then((data) => {
  //       console.log(data);
  //       toast.success("Booking Successful!");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error(err?.message);
  //     });
  // };

  return (
    <div className="md:flex gap-5 items-start justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-4">
      {/* Details */}
      <div className="flex-1">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          defaultIndex={1}
        >
          <Tab.List>
            <div className="container flex flex-wrap items-center py-4 mx-auto overflow-y-auto whitespace-nowrap">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={selected ? "text-blue-600" : "text-gray-600"}
                  >
                    1. Reviews house rules
                  </button>
                )}
              </Tab>

              <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={selected ? "text-blue-600" : "text-gray-600"}
                  >
                    2. Who's coming?
                  </button>
                )}
              </Tab>

              <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={selected ? "text-blue-600" : "text-gray-600"}
                  >
                    3. Confirm and pay
                  </button>
                )}
              </Tab>
            </div>
          </Tab.List>


          <Tab.Panels>
            <Tab.Panel>
              <ReviewHouse
                setSelectedIndex={setSelectedIndex}
                homeData={{
                  ...state?.homeData,
                  totalNights: state?.totalNights,
                }}
              />
            </Tab.Panel>
            <Tab.Panel>
              {/* WhosComing Comp */}
              <WhosComing
                setSelectedIndex={setSelectedIndex}
                host={checkoutData?.host}
                bookingData={bookingData}
                setBookingData={setBookingData}
              />
            </Tab.Panel>
            <Tab.Panel>
               {/* Payment Component  */}
              {/* <Payment handleBooking={handleBooking} /> */}
             
              <Elements stripe={stripePromise} >
                <CheckOutForm bookingData={bookingData} />
              </Elements>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* Cart */}
      <CheckoutCart homeData={checkoutData} />
    </div>
  );
};

export default Checkout;
