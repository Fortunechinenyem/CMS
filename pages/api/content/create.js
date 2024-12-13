import dbConnect from "@/lib/db";
import roleMiddleware from "@/middleware/roleMiddleware";
import Content from "@/models/Content";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();

    const { title, body, author } = req.body;

    try {
      roleMiddleware(["admin", "editor"]);
      const content = await Content.create({ title, body, author });
      res.status(200).json(content);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
