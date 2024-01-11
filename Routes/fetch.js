import express from "express";
const router = express.Router();

router.get("/fetch", (req, res) => {
  res.send("bye");
});

export default router;
