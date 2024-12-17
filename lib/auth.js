import jwt from "jsonwebtoken";
import { connectToDatabase } from "./db";

export async function verifyTokenAndRole(req, roles = []) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) throw new Error("Unauthorized. No token provided.");

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const { db } = await connectToDatabase();

  const user = await db.collection("users").findOne({ email: decoded.email });
  if (!user) throw new Error("User not found.");

  if (!roles.includes(user.role)) throw new Error("Access denied.");

  return user;
}
