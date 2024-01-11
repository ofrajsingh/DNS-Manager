import axios from "axios";

const URL = "http://localhost:3001";

const API = axios.create({
  baseURL: URL,
});

const setAuthorizationHeader = () => {
  const jwtToken = localStorage.getItem("token");
  if (jwtToken) {
    API.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
  }
};

export const login = async (credentials, clientId) => {
  try {
    setAuthorizationHeader();
    const response = await API.post("/login", {
      cred: credentials,
      id: clientId,
    });
    return response;
  } catch (error) {
    console.error("Error during login:", error);
  }
};
