import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },

    // FULL resume JSON (basics, experience, education, skills, etc)
    resume: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Resume ||
  mongoose.model("Resume", ResumeSchema);
