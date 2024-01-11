import express from "express";
import { OAuth2Client } from "google-auth-library";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { id: clientId, cred: credential } = req.body;
    const client = new OAuth2Client(clientId);
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: clientId,
    });

    const payload = ticket.getPayload();
    console.log(payload);
    res.status(200).json({ success: true, payload });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(401).json({ success: false, error: "Invalid credentials" });
  }
});

export default router;
