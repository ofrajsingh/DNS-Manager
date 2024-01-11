import express from "express";

const router = express.Router();

router.post("/add", (req, res) => {
  res.send("recieved");
});

export default router;
