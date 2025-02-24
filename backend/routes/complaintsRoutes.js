import express from 'express';
import {
    createComplaint,
    getAllComplaints,
    getComplaintById,
    updateComplaint,
    deleteComplaint,
    getResolvedComplaintForAuthority,
    getUnresolvedComplaintForAuthority,
    getResolvedComplaintsByUser,
    getUnresolvedComplaintsByUser,
    claimAllRewards
} from '../controllers/complaintController.js';
import { upload } from "../middleware/multerMiddleware.js";

const router = express.Router();


router.post('/report', upload.single('beforeImg'), createComplaint);
router.get('/complaints', getAllComplaints);
router.get('/complaints/:id', getComplaintById);
router.put('/complaints/:id', upload.single('afterImg'), updateComplaint);
router.delete('/complaints/:id', deleteComplaint);
router.get('/get-resolved-complaints-for-authority', getResolvedComplaintForAuthority);
router.get('/get-unresolved-complaints-for-authority', getUnresolvedComplaintForAuthority);
router.get('/get-resolved-complaints-by-user', getResolvedComplaintsByUser);
router.get('/get-unresolved-complaints-by-user', getUnresolvedComplaintsByUser);
router.post('/claim-all', claimAllRewards);
export default router;