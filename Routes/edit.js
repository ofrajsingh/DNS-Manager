import express from "express";
const route = express.Router();

route.patch("/edit", (req, res) => {
  res.send("HI");
});

export default route;
