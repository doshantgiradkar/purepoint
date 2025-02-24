import express from 'express';
import {
    createComplaint,
    getAllComplaints,
    getComplaintById,
    updateComplaint,
    deleteComplaint,
} from '../controllers/complaintController.js';
import { upload } from "../middleware/multerMiddleware.js";

const router = express.Router();


router.post('/report', upload.single('beforeImg'), createComplaint);
router.get('/complaints', getAllComplaints);
router.get('/complaints/:id', getComplaintById);
router.put('/complaints/:id', upload.single('afterImg'), updateComplaint);
router.delete('/complaints/:id', deleteComplaint);

export default router;