import { Complaint } from "../models/complaintsModel.js";
import {
    deleteImageBySecureUrl,
    uploadOnCloudinary,
} from "../utils/cloudinary.js";
import fs from "fs";
import dotenv from "dotenv";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
dotenv.config();

export const createComplaint = async (req, res) => {
    const cookie = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    const { subject, userId, longitude, latitude, description } = req.body;

    if (!subject || !userId || !longitude || !latitude || !description) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }
    const beforeImg = req.file;
    let path;
    if (beforeImg) {
      path = beforeImg.path; // Extract file path
    }
    let beforeImgUrl = "";
    if (beforeImg) {
      const cloudinaryResult = await uploadOnCloudinary(path);
      beforeImgUrl = cloudinaryResult.secure_url;
    }

    function haversine(lat1, lon1, lat2, lon2) {
        const toRad = (angle) => (angle * Math.PI) / 180;
        const R = 6371; // Earth's radius in km
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
    
        const a = Math.sin(dLat / 2) ** 2 +
                  Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                  Math.sin(dLon / 2) ** 2;
    
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        
        return R * c; // Distance in km
    }
    
    // Fetch authorities
    const authorities = await User.find({ role: "authority" }).select('-password');
    
    if (!authorities.length) {
        console.log("No authorities found.");
        return null; // Handle empty authorities case
    }
    
    // Initialize with first authority (not { distance: Infinity })
    let nearestAuthority = { ...authorities[0], distance: haversine(latitude, longitude, authorities[0].location.latitude, authorities[0].location.longitude) };
    
    // Find the nearest authority
    authorities.forEach((authority) => {
        const distance = haversine(latitude, longitude, authority.location.latitude, authority.location.longitude);
        
        if (distance < nearestAuthority.distance) {
            nearestAuthority = { ...authority, distance };
        }
    });
    
    console.log(nearestAuthority);

    // Create a new complaint in the database
    let complaint = new Complaint({
        subject: subject,
        filedby: cookie.userId,
        before: beforeImgUrl,
        userid: userId,
        locaiton: {
            longitude: longitude,
            latitude: latitude
        },
        authorityAssigned: nearestAuthority._doc._id,
        description: description,
    });

    if (path && fs.existsSync(path)) {
          fs.unlinkSync(path);
    }
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
        complaint.afterImg = afterUrl;
        complaint.resolvedAt = Date.now();
        complaint.status = "resolved";

        complaint.save();
        res.status(200).json({ success: true, message: "Complaint updated successfully" });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ success: false, message: "Error updating complaint" });
    });
};

export const getResolvedComplaintForAuthority = async (req, res) => {
    let cookie = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

    const id = cookie.userId;

    if (!id && cookie.role !== "authority") {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const complaints = await Complaint.find({ authorityAssigned: id, status: "resolved" });
        res.status(200).json({ success: true, complaints });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error getting complaints" });
    }
}

export const getUnresolvedComplaintForAuthority = async (req, res) => {
    let cookie = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

    const id = cookie.userId;

    if (!id && cookie.role !== "authority") {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const complaints = await Complaint.find({ 
            filedby: id, 
            status: { $ne: "resolved" } 
        });
        res.status(200).json({ success: true, complaints });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error getting complaints" });
    }
}

export const getResolvedComplaintsByUser = async (req, res) => {
    let cookie = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

    const id = cookie.userId;

    if (!id && cookie.role !== "user") {
        return res.status(401).json({ success: false, message: "Unauthorized" });    
    }

    try {
        const complaints = await Complaint.find({ filedby: id, status: "resolved" });
        res.status(200).json({ success: true, complaints });
    } catch (error) {
        console.log(error);    
        res.status(500).json({ success: false, message: "Error getting complaints" });
    }
}

export const getUnresolvedComplaintsByUser = async (req, res) => {
    let cookie = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

    const id = cookie.userId;

    if (!id && cookie.role !== "user") {
        return res.status(401).json({ success: false, message: "Unauthorized" });    
    }

    try {
        const complaints = await Complaint.find({ 
            filedby: id, 
            status: { $ne: "resolved" } 
        });
        res.status(200).json({ success: true, complaints });
    } catch (error) {
        console.log(error);    
        res.status(500).json({ success: false, message: "Error getting complaints" });
    }
}

export const claimAllRewards = async (req, res) => {
    let cookie = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

    const id = cookie.userId;

    if (!id && cookie.role !== "user") {
        return res.status(401).json({ success: false, message: "Unauthorized" });    
    }

    try {
        await Complaint.updateMany(
            { filedby: id, status: "resolved" }, 
            { $set: { isClaimed: true } }
        );
        res.status(200).json({ success: true, complaints });
    } catch (error) {
        console.log(error);    
        res.status(500).json({ success: false, message: "Error getting complaints" });
    }
}