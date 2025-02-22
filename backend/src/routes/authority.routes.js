import express from "express";
import { getAuthorityProfile, loginAuthority, registerAuthority } from "../controllers/authority.controllers.js";



const router = express.Router();

router.post("/register", registerAuthority);
router.post("/login", loginAuthority);
router.get("/profile", getAuthorityProfile);

export default router;
