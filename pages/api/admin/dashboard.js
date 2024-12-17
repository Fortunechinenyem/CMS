import { verifyTokenAndRole } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default async function handler(req, res) {
  try {
    const user = await verifyTokenAndRole(req, ["admin"]);

    const { db } = await connectToDatabase();

    if (req.method === "GET") {
      return res.status(200).json({
        message: `Welcome, Admin ${user.username}!`,
        data: "This is the admin dashboard data.",
      });
    }

    if (req.method === "PATCH") {
      const { email, newRole } = req.body;

      if (!email || !newRole) {
        return res
          .status(400)
          .json({ message: "Email and new role are required." });
      }

      await db
        .collection("users")
        .updateOne({ email }, { $set: { role: newRole } });

      return res.status(200).json({
        message: `User role updated to '${newRole}' successfully!`,
      });
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    return res.status(403).json({ message: error.message });
  }
}
