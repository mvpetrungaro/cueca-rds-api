import express from "express";
import controller from "../controllers/cards.controller.js";

const router = express.Router();

router.get("/", controller.getCards);

export default router;
