import express from "express"
import { authorizeRoles } from "../middleware/auth.role.js"
import { deleteUser, getUser } from "../controllers/admin.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"
const routers = express.Router()

routers.get("/getuser",authMiddleware,authorizeRoles("admin"),getUser)
routers.delete("/deleteuser/:id",authMiddleware,authorizeRoles("admin"),deleteUser)


export default routers