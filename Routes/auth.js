import express from "express";
import jwt from "jsonwebtoken";
const route = express.Router();

route.get("/auth", (req, res) => {
  function extractToken(authorizationHeader) {
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return null;
    }
    return authorizationHeader.slice(7);
  }
  const token = extractToken(req.headers.authorization);
  jwt.verify(token, process.env.KEY, async (err, decodedToken) => {
    if (err) {
      res.status(403).json({ mssg: "Unauthorized" });
    } else {
      res.status(200).json({
        firstName: decodedToken.given_name,
        lastName: decodedToken.family_name,
      });
    }
  });
});

export default route;
