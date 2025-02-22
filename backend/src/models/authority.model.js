import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    location: {
      latitude: { type: Number, required: false },
      longitude: { type: Number, required: false },
    },
    role: { type: String, enum: ["user", "authority"], default: "user" },
    points: { type: Number, default: 0 }, 
    rank: { type: Number },
    reports: [], 
    resplvedReports : [],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
