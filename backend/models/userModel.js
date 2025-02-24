import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      unique: true, 
      required: true, 
    },
    bio: {
      type: String,
    },
    password: {
      type: String,
      required: true, 
    },
    profilePicture: {
      type: String,
      default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ghae4OEdb4UmC3hkqpFvLAHaGd%26pid%3DApi&f=1&ipt=d7c94da5fae28f0cfbed9e59ba902a6cdd0fcb82cc2b6dc9520b209cd81fdf6c&ipo=images", 
    },
    lastLogin: {
      type: Date,
      default: Date.now, 
    },
    isVerified: {
      type: Boolean,
      default: false, 
    },
    isProfileComplete: {
      type: Boolean,
      default: false, 
    },
    credits: { type: Number, default: 0 },
    rank: { type: Number, default: 0 },
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: "Report" }],
    resolvedReports: [{ type: mongoose.Schema.Types.ObjectId, ref: "Report" }],
  },
  { timestamps: true }
);

// Create the User model
export const User = mongoose.model("User", userSchema);
