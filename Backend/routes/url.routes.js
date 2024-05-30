import express from "express";
const router = express.Router();
import shortURL from "../controllers/shortURL.controller.js";
import checkURL from "../middleware/checkURL.js";
// import checkURL from "../middleware/checkURL.js";

// Link will go through middleware
router.post("/", checkURL, shortURL);

export default router;
