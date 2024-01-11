import express from "express";
import add from "./Routes/add.js";
import edit from "./Routes/edit.js";
import del from "./Routes/delete.js";
import fetch from "./Routes/fetch.js";

const app = express();

// middleware

app.use("/", add);
app.use("/", edit);
app.use("/", del);
app.use("/", fetch);

// Initialization
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening to PORT : ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("WORKING FINE");
});
