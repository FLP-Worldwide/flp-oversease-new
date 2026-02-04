import mongoose from "mongoose";

const StudySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    state: String,
    city: String,

    program: String,
    intake: String,
    destination: String,
    loan: String,

    study: Object, // 🔥 full payload backup (like resume)

  },
  { timestamps: true }
);

export default mongoose.models.Study ||
  mongoose.model("Study", StudySchema);
