
// save a booking 

export const saveBooking = async (bookingData) => {
  const url = "http://localhost:5000/bookings";
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const data = await response.json();
  return data;
};




// get All bookings for admin
export const getBookingsByEmail= async (email) => {
  const response = await fetch(
    `http://localhost:5000/bookings?email=${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
      },
    }
  );
  const bookings = await response.json();
  return bookings;
};

  
// get All bookings for admin
export const getBookings = async () => {
  const response = await fetch( 'http://localhost:5000/bookings',
    // {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/json",
    //     // authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    //   },
    // }
  );
  const bookings = await response.json();
  return bookings;
};
// cencel a booking