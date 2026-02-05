import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controllers/todo.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/auth.role.js";
const router = express.Router();

router.post("/create", authMiddleware, createTodo);
router.get("/get", authMiddleware, getTodo);
router.delete(
  "/delete/:id",
  authMiddleware,
    authorizeRoles("admin"),
  deleteTodo
);
router.patch("/update/:id", authMiddleware, updateTodo);
export default router;
