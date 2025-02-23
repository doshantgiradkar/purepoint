import express from 'express';
import {
    createComplaint,
    getAllComplaints,
    getComplaintById,
    updateComplaint,
    deleteComplaint,
} from '../controllers/complaintController.js';

const router = express.Router();


router.post('/report', createComplaint);
router.get('/complaints', getAllComplaints);
router.get('/complaints/:id', getComplaintById);
router.put('/complaints/:id', updateComplaint);
router.delete('/complaints/:id', deleteComplaint);

export default router;