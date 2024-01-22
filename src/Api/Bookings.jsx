
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




// get All bookings by email
export const getBookingsByEmail= async (email) => {
  const response = await fetch(
    `http://localhost:5000/bookings?email=${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
      },
    }
  );
  const bookings = await response.json();
  return bookings;
};



  // Delete a booking
export const deleteBooking = async (id) => {
  const response = await fetch(
    `http://localhost:5000/booking/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",

        authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
      },
    }
  );
  const data = await response.json();
  return data;
};




// get All bookings for admin
export const getBookings = async () => {
  const response = await fetch( 'http://localhost:5000/bookings',
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
      },
    }
  );
  const bookings = await response.json();
  return bookings;
};
// Create payment intent
// eslint-disable-next-line no-unused-vars
export const getPaymentIntent=async price=>{
  const response = await fetch(
    'http://localhost:5000/create-payment-intent',
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
      },
      body: JSON.stringify({price}),
    }
  );
  const data = await response.json();
  return data;
  
};

// // save booking after payment 
// export const saveBooking=bookingData=>{

//  return  fetch('http://localhost:5000/bookings',{
//     method:'POST',
//     headers:{
//       'content-type':'application/json'
//     },
//     body:JSON.stringify(bookingData),
//   })

// }