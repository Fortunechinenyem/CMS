import { connectToDatabase } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const { db } = await connectToDatabase();

      const user = await db.collection("users").findOne({ email });

      if (!user) {
        return res.status(401).json({ message: "User does not exist." });
      }

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        return res.status(403).json({ message: "Invalid credentials." });
      }

      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.status(200).json({ token, message: "Login successful!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong!" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
