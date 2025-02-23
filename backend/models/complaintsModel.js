import { en } from "faker/lib/locales";
import mongoose from "mongoose";

const compalintsSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    userid: {
      type: String,
      unique: true, 
      required: true, 
    },
    beforeImg: {
      type: String,
      default: "https://res.cloudinary.com/dqml2xcd0/image/upload/v1737452571/avatar-3814049_1920_hguhbt.png",
      required: true, 
    },
    afterImg: {
        type: String,
        default: undefined, 
    },
    resolvedAt: {
      type: Date,
      default: undefined,
    },
    authorityAssigned: {
      type: String,
      default: undefined,
      required: true,
    },
    locaiton: {
      type: String,
      longitude: {
        type: Number,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
      required: true,
    },
    credits: {
      type: Number,
      default: 10,
    },
    status: {
      type:string,
      enum: ["pending", "resolved"],
      default: "pending",
    }
  },
  { timestamps: true }
);

// Create the User model
export const Complaints = mongoose.model("Complaints", compalintsSchema);
