import { connectToDatabase } from "@/lib/db";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields." });
    }

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

    return res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error in API route:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
