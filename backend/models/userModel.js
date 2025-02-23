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
      default: "https://res.cloudinary.com/dqml2xcd0/image/upload/v1737452571/avatar-3814049_1920_hguhbt.png", 
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
    resetPasswordToken: String, 
    resetPasswordExpiresAt: Date, 
    verificationToken: String,
    verificationTokenExpiresAt: Date, 
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
