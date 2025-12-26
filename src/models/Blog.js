import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true }, // HTML or markdown
    author: { type: String, default: "Admin" },
    tags: [String],
  },
  { timestamps: true }
);

// avoid model re-registration in Next hot reload
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
