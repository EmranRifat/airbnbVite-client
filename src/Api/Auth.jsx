export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  // console.log(user)
  fetch(`/api/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("access-Token", data.Token);
    });
};
