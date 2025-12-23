import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    // BASIC DETAILS
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    phone: String,

    companyName: String,
    designation: String,
    industry: String,
    website: String,

    message: String,

    // 🔥 IMPORTANT
    source: {
        type: String,
       enum: [
  "enquiry",
  "callback",
  "manual",
  "partner",
  "hire_manpower",
  "request_workforce",
  "hire-manpower",        // legacy
  "request-workforce"    // legacy
],
        required: true,
        },
// models/Leads.js
history: [
  {
    text: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
],
sequence: {
  type: Number,
  default: 0,
},


    // KANBAN STATUS
    status: {
      type: String,
      enum: ["todo", "in-progress", "done", "invalid", "delete"],
      default: "todo",
    },

    // BOARD (for future multiple pipelines)
    boardId: {
      type: String,
      default: "default-board",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Leads ||
  mongoose.model("Leads", LeadSchema);
