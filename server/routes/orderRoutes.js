import express from "express";
const router = express.Router();
import {
  getOrders,
  createOrders,
  updateOrders,
  deleteOrders,
} from "../controllers/orderControllers.js";
router.get("/", getOrders);
router.post("/", createOrders);
router.put("/:id", updateOrders);
router.delete("/:id", deleteOrders);

export default router;
