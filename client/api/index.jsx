import axios from "axios";

const URL = "http://localhost:3001";

const API = axios.create({
  baseURL: URL,
});

export const login = async (credentials, clientId) => {
  try {
    const response = await API.post("/login", { cred: credentials, id: clientId });
    console.log(response.data);
  } catch (error) {
    console.error("Error during login:", error);
  }
};
