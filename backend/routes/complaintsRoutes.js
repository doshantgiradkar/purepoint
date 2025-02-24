import express from 'express';
import {
    createComplaint,
    getAllComplaints,
    updateComplaint,
    deleteComplaint,
    getResolvedComplaintForAuthority,
    getUnresolvedComplaintForAuthority,
    getResolvedComplaintsByUser,
    getUnresolvedComplaintsByUser,
    claimAllRewards
} from '../controllers/complaintsController.js';
import { upload } from "../middleware/multerMiddleware.js";

const complaintRouter = express.Router();


complaintRouter.post('/report', upload.single('beforeImg'), createComplaint);
complaintRouter.get('/complaints', getAllComplaints);
complaintRouter.put('/complaints/:id', upload.single('afterImg'), updateComplaint);
complaintRouter.delete('/complaints/:id', deleteComplaint);
complaintRouter.get('/get-resolved-complaints-for-authority', getResolvedComplaintForAuthority);
complaintRouter.get('/get-unresolved-complaints-for-authority', getUnresolvedComplaintForAuthority);
complaintRouter.get('/get-resolved-complaints-by-user', getResolvedComplaintsByUser);
complaintRouter.get('/get-unresolved-complaints-by-user', getUnresolvedComplaintsByUser);
complaintRouter.post('/claim-all', claimAllRewards);
export default complaintRouter;