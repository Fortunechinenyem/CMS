import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  published: { type: Boolean, default: false },
});

export default mongoose.models.Content ||
  mongoose.model("Content", ContentSchema);
