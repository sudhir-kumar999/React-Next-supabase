import express from "express"
import { loginController, logoutController, protectRoute, signupController } from "../controllers/auth.controllers.js"
import { authMiddleware } from "../middleware/auth.middleware.js"
const route = express.Router()

route.post("/register" , signupController)
route.post("/login" , loginController)
route.get("/me",authMiddleware,protectRoute)
route.post("/logout",logoutController)

export default route