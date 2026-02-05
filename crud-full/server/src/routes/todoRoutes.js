import express from "express"
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todoControllers.js"
const router=express.Router()


router.get("/get",getTodo)
router.post("/create",createTodo)
router.delete("/delete/:id",deleteTodo)
router.patch("/update/:id",updateTodo)


export default router