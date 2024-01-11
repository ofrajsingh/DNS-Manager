import express from "express";
import add from "./Routes/add.js";
import edit from "./Routes/edit.js";
import del from "./Routes/delete.js";
import fetch from "./Routes/fetch.js";
import login from "./Routes/login.js";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", add);
app.use("/", edit);
app.use("/", del);
app.use("/", fetch);
app.use("/", login);

// Initialization
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening to PORT : ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("WORKING FINE");
});
