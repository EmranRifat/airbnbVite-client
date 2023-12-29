
export const addHome = async (homeData) => {
  const response = await fetch(
    "http://localhost:5000/homes",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(homeData),
    }
  );
  const data = await response.json();

  return data;
};





// get all homes
export const getAllHome = async () => {
    const res = await fetch("http://localhost:5000/homes");
    const data = res.json();
    return data;
  };



  // Search Result
export const getSearchResult = async (location, from, to, total_guest) => {
  const response = await fetch(
    `http://localhost:5000/search-result?location=${location}&from=${from}&to=${to}&total_guest=${total_guest}`
  );
  const data = await response.json();
  return data;
};
