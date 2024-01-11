import express from "express";
const router = express.Router();

router.delete("/delete", (req, res) => {
  res.send("ihhiiih");
});

export default router;
