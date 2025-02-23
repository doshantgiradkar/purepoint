import Complaint from "../models/complaintModel.js";
import {
    deleteImageBySecureUrl,
    uploadOnCloudinary,
} from "../utils/cloudinary.js";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

export const createComplaint = (req, res) => {
    const { userId, longitude, latitude, description } = req.body;

    if (!userId || !longitude || !latitude || !description) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Create a new complaint in the database
    let complaint = new Complaint({
        userid: userId,
        locaiton: {
            longitude: longitude,
            latitude: latitude
        },
        description: description,
    });

    complaint.save();
    return res.status(200).json({ success: true, message: "Complaint created successfully" });
};

export const getAllComplaints = (req, res) => {
    Complaint.find().then(complaints => {
        res.status(200).json({ success: true, complaints });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ success: false, message: "Error getting complaints" });
    });
};

export const deleteComplaint = (req, res) => {
    const { id } = req.params;
    Complaint.findByIdAndRemove(id).then(complaint => {
        if (!complaint) {
            return res.status(404).json({ success: false, message: "Complaint not found" });
        }
        res.status(200).json({ success: true, message: "Complaint deleted successfully" });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ success: false, message: "Error deleting complaint" });
    });
};

export const updateComplaint = (req, res) => {
    const { id } = req.params;
    const { description, resolvedAt } = req.body;
    let path;
    if (after) {
        path = after.path; // Extract file path
    }
    Complaint.findById(id).then( async(complaint) => {
        if (!complaint) {
            return res.status(404).json({ success: false, message: "Complaint not found" });
        }
        let afterUrl = "";
        if (after) {
          const cloudinaryResult = await uploadOnCloudinary(path);
          afterUrl = cloudinaryResult.secure_url;
        }
        complaint.after = afterUrl;
        complaint.resolvedAt = Date.now();
        complaint.status = "resolved";

        complaint.save();
        res.status(200).json({ success: true, message: "Complaint updated successfully" });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ success: false, message: "Error updating complaint" });
    });
};