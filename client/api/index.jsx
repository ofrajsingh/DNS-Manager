import axios from "axios";

const URL = "http://localhost:3001";

const API = axios.create({
  baseURL: URL,
});

export const login = (credentials, clientId) => {
  API.post("/login", { cred: credentials, id: clientId });
};
