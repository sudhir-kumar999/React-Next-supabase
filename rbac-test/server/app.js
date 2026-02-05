import cookieParser from "cookie-parser";
import express from "express"
import cors from "cors"
import router from "./src/routes/userRoutes.js";
const app =express()


app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.get("/hello",(req,res)=>{
    res.send("hello")
})
app.use("/auth",router)
app.use("/user",router)
export default app;