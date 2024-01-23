/* eslint-disable no-unused-vars */

export const addHome = async (homeData) => {
  const response = await fetch("/api/homes", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(homeData),
  });
  const data = await response.json();

  return data;
};

// /get filtered homes for hosts
export const getHostHomes = async (email) => {
  const response = await fetch(`/api/homes/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      // authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
    },
  });
  const data = await response.json();
  return data;
};

// get all homes
export const getAllHome = async () => {
  const res = await fetch("/api/homes");
  const data = res.json();
  return data;
};

// delete a home
export const deleteHome = async (id) => {
  const response = await fetch(`/api/home/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      // authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const result = await response.json();
  return result;
};

// update a home
export const updateHome = async (homeData) => {
  const response = await fetch("/api/homes", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
    body: JSON.stringify(homeData),
  });

  const data = await response.json();
  return data;
};

// Search Result
export const getSearchResult = async (location, from, to, total_guest) => {
  const response = await fetch(
    `/api/search-result?location=${location}&from=${from}&to=${to}&total_guest=${total_guest}`
  );
  const data = await response.json();
  return data;
};
