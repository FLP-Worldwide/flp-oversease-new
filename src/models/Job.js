import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    country: { type: String, required: true },
    salary: { type: String },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "contract"],
      default: "full-time",
    },
    skills: [String],
    description: { type: String },
    status: {
      type: String,
      enum: ["active", "closed"],
      default: "active",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Job || mongoose.model("Job", JobSchema);