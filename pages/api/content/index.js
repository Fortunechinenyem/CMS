// import { verifyTokenAndRole } from "@/lib/auth";

import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();

    if (req.method === "GET") {
      const content = await db.collection("content").find({}).toArray();
      res.status(200).json({ content });
    } else if (req.method === "POST") {
      const { title, body } = req.body;
      if (!title || !body) {
        return res
          .status(400)
          .json({ message: "Title and body are required." });
      }
      const result = await db.collection("content").insertOne({ title, body });
      res
        .status(201)
        .json({ message: "Content created", id: result.insertedId });
    } else if (req.method === "PATCH") {
      const { id, title, body } = req.body;
      if (!id || !title || !body) {
        return res
          .status(400)
          .json({ message: "ID, title, and body are required." });
      }

      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const updateResult = await db
        .collection("content")
        .updateOne({ _id: new ObjectId(id) }, { $set: { title, body } });

      if (updateResult.matchedCount === 0) {
        return res.status(404).json({ message: "Content not found" });
      }

      res.status(200).json({ message: "Content updated successfully" });
    } else if (req.method === "DELETE") {
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ message: "ID is required." });
      }

      // Ensure id is a valid ObjectId
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      await db.collection("content").deleteOne({ _id: new ObjectId(id) });
      res.status(200).json({ message: "Content deleted" });
    } else {
      res.status(405).json({ message: "Method not allowed." });
    }
  } catch (error) {
    console.error("Error in /api/content:", error);
    res.status(500).json({ message: "Internal server error." });
  }
}
