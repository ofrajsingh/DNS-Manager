import express from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  function extractToken(authorizationHeader) {
    // Check if the authorizationHeader is present and starts with 'Bearer '
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return null; // Invalid or missing authorization header
    }
    // Remove 'Bearer ' and return the token
    return authorizationHeader.slice(7);
  }
  const { id: clientId, cred: credential } = req.body;
  const client = new OAuth2Client(clientId);
  const ticket = await client.verifyIdToken({
    idToken: credential,
    audience: clientId,
  });

  const payload = ticket.getPayload();
  const token = extractToken(req.headers.authorization);
  let isVerified = false;

  if (token) {
    // returns decoded other wise error
    jwt.verify(token, process.env.KEY, async (err, decodedToken) => {
      if (err) {
        res.send(err);
      } else {
        if (decodedToken.email !== payload.email) {
          try {
            const firstName = payload.given_name;
            const lastName = payload.family_name;
            const email = payload.email;

            const newUser = new User({
              firstName,
              lastName,
              email,
            });

            const savedData = await newUser.save();
            console.log(savedData);
            //generating token
            const token = jwt.sign(payload, process.env.KEY);

            res.status(200).json({ success: true, payload, token });
          } catch (error) {
            console.error("Error during login:", error);
            res
              .status(401)
              .json({ success: false, error: "Invalid credentials" });
          }
        }
      }
    });
  } else {
    try {
      const firstName = payload.given_name;
      const lastName = payload.family_name;
      const email = payload.email;

      const newUser = new User({
        firstName,
        lastName,
        email,
      });

      const savedData = await newUser.save();
      console.log(savedData);

      //generating token
      const token = jwt.sign(payload, process.env.KEY);

      res.status(200).json({ success: true, payload, token });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(401).json({ success: false, error: "Invalid credentials" });
    }
  }
});

export default router;
