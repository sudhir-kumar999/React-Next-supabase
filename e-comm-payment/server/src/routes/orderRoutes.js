import express from "express";
import { myOrders } from "../controller/orderController.js";
import { protect } from "../midleware/authMiddleware.js";

const routerss = express.Router();

routerss.get("/my", protect, myOrders);

export default routerss;
