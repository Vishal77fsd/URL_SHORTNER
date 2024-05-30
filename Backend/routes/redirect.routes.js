import express from "express";
import redirectURL from "../controllers/redirecturl.controller.js";
const router = express.Router();

router.get("/:id", redirectURL);

export default router;
