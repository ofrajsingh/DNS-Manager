import express from "express";
import add from "./Routes/add.js";
import edit from "./Routes/edit.js";
import del from "./Routes/delete.js";
import fetch from "./Routes/fetch.js";
import login from "./Routes/login.js";
import cors from "cors";
import mongoose from 'mongoose';

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://rajsingh00seven:qbIrNmKG0rpcv0RC@cluster0.7w0owwk.mongodb.net/");
    console.log("Database is connected successfully");

    // Initialize the server only after the database connection is successful
    const PORT = 3001;
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });

  } catch (err) {
    console.error(err);
  }
};

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", add);
app.use("/", edit);
app.use("/", del);
app.use("/", fetch);
app.use("/", login);

// Call connectDB function to establish the database connection
connectDB();

app.get("/", (req, res) => {
  res.send("WORKING FINE");
});
