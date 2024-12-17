import bcrypt from "bcryptjs";
import { connectToDatabase } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "Please fill all fields." });
    }

    try {
      const { db } = await connectToDatabase();

      const existingUser = await db.collection("users").findOne({ email });

      if (existingUser) {
        return res.status(409).json({ message: "User already exists." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await db.collection("users").insertOne({
        username,
        email,
        password: hashedPassword,
      });

      res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong!" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
