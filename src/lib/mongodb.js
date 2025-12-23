import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI missing");
}

// ⛔ process-level singleton
let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "flp_overseas",
      serverSelectionTimeoutMS: 10000,
      family: 4,
    });

    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed", err);
    throw err;
  }
}
