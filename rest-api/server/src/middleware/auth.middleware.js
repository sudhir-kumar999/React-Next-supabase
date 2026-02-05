import  jwt  from "jsonwebtoken"
import User from "../models/user.js"
import mongoose from "mongoose"

export const authMiddleware= async(req,res,next)=>{
    const token = req.cookies?.access
    try{
    if(!token){
        return res.json({
            success:false,
            message:"no token found"
        })
    }

    const decoded = jwt.verify(token , process.env.JWT_SECRET)

    const user = await User.findById(decoded.id).select("-password")
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user=user
    // req.user=new mongoose.Types.ObjectId(user._id.toString());
    next()
}catch(error){
    console.log(error)
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
}
}
