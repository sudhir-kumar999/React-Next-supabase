import User from "../models/userModels.js"
import { verifyToken } from "../utils/token.js"

export const protect=async(req,res,next)=>{
    const token=req.cookies.token
    if(!token){
        res.json({
            success:false,
            message:"not token found login again"
        })
    }
    const decoded=verifyToken(token,process.env.JWT_SECRET)
    console.log(decoded)
    if(!decoded){
         res.json({
            success:false,
            message:"wrong token"
        })
    }
    const user=await User.findById(decoded.id).select("-password")
    console.log(user)
    req.user=user
    next()

}