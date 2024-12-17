import { verifyTokenAndRole } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
  try {
    const user = await verifyTokenAndRole(req, ["admin", "editor"]);

    const { db } = await connectToDatabase();

    if (req.method === "POST") {
      const { title, body, author } = req.body;

      if (!title || !body) {
        return res
          .status(400)
          .json({ message: "Title and body are required." });
      }

      const newContent = {
        title,
        body,
        author: author || user.username,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await db.collection("content").insertOne(newContent);
      return res.status(201).json({
        message: "Content created successfully!",
        content: result.ops[0],
      });
    }

    if (req.method === "GET") {
      const contentList = await db.collection("content").find().toArray();
      return res.status(200).json({ content: contentList });
    }

    if (req.method === "PATCH") {
      const { id, title, body } = req.body;

      if (!id || !title || !body) {
        return res
          .status(400)
          .json({ message: "ID, title, and body are required for updating." });
      }

      await db
        .collection("content")
        .updateOne(
          { _id: require("mongodb").ObjectId(id) },
          { $set: { title, body, updatedAt: new Date() } }
        );

      return res.status(200).json({ message: "Content updated successfully!" });
    }

    if (req.method === "DELETE") {
      const { id } = req.body;

      if (!id) {
        return res
          .status(400)
          .json({ message: "ID is required for deletion." });
      }

      await db.collection("content").deleteOne({
        _id: require("mongodb").ObjectId(id),
      });

      return res.status(200).json({ message: "Content deleted successfully!" });
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
