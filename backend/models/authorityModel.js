import mongoose from "mongoose";

const authoritySchema = new mongoose.Schema(
    {
        Name: {
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
        location: {
            longitude: {
                type: Number,
                required: true,
            },
            latitude: {
                type: Number,
                required: true
            }
        },
        complaints: [
            {
                type: mongoose.Schema.Types.ObjectId,
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
        resetPasswordToken: String,
        resetPasswordExpiresAt: Date,
        verificationToken: String,
        verificationTokenExpiresAt: Date,
    },
    { timestamps: true }
);

// Create the User model
export const Authority = mongoose.model("Authority", authoritySchema);
