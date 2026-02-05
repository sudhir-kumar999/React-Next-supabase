import express from "express"
import { createUser, loginUser } from "../controller/authController.js"
import { user } from "../controller/userController.js"
import { protect } from "../middleware/authmiddleware.js"
import { authorize } from "../middleware/authorize.js"
const router=express.Router()

router.post("/create",createUser)
router.post("/login",loginUser)
router.get("/get",protect,authorize("user"),user)


export default router