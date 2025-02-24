import { en } from "faker/lib/locales";
import mongoose from "mongoose";
import { type } from "os";

const compalintsSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    filedby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Authority",
      default: undefined,
      required: true,
    },
    locaiton: {
      longitude: {
        type: Number,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
    },
    credits: {
      type: Number,
      default: 10,
    },
    status: {
      type:string,
      enum: ["pending", "in review", "resolved"],
      default: "pending",
    }
  },
  { timestamps: true }
);

// Create the User model
export const Complaints = mongoose.model("Complaints", compalintsSchema);
