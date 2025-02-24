import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
      required: false
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
    location: {
      longitude: {
        type: Number,
      },
      latitude: {
        type: Number,
      }
    },
    role: {
      type: String,
      enum: ['user', 'authority']
    },
    registeredComplaints: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Complaint",
      }
    ],
    resolvedComplaints: [
      { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Complaint",
      }
    ],
    recievedComplaints: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Complaint",
      }
    ],
    solvedComplaints: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Complaint",
      }
    ],
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
    rating: { type: Number, default: 0, min: 0, max: 5 },
    resetPasswordToken: String,
    resetPasswordExpireAt: Date,
    verificationToken: String,
    verificationExpireAt: Date
  },
  { timestamps: true }
);

// Create the User model
export const User = mongoose.model("User", userSchema);
