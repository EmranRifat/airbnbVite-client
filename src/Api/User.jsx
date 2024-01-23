export const hostRequest = async (hostData) => {
  const url = `/api/user/${hostData?.email}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(hostData),
  });
  const data = await response.json();
  return data;
};

// get user role
export const getUserRole = async (email) => {
  const url = `/api/user/${email}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const user = await response.json();
  return user?.role;
};

// get all users

// eslint-disable-next-line no-unused-vars
export const getAllUsers = async () => {
  const url = "/api/users";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const users = await response.json();
  // console.log(users);
  return users;
};

export const getRole = async (email) => {
  const response = await fetch(`/api/user/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const user = await response.json();
  return user?.role;
};

export const makeHost = async (user) => {
  delete user._id;
  const response = await fetch(`/api/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
    body: JSON.stringify({ ...user, role: "host" }),
  });
  const users = await response.json();

  return users;
};
