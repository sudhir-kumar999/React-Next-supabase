import User from "../models/userModels.js";
import bcrypt from "bcrypt"
import { generateToken } from "../utils/token.js";

export const createUser=async(req , res)=>{
    const {name,email,password} =req.body;
    console.log(req.body)
    const hashed=await bcrypt.hash(password,10)
    const user=await User.create({
        name,
        email,
        password:hashed
    })
    if(!user){
        res.json({
            success:false,
            message:"user not created"
        })
    }
    res.json({
        success:true,
        message:"user created",
        data:user
    })
}

export const loginUser=async(req,res)=>{
    const {email,password}=req.body

    if(!email||!password){
        res.json({
            success:false,
            message:"fill both email and password"
        })
    }
    const user=await User.findOne({email})
    // console.log(user)
   
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        res.json({
            success:false,
            message:"wrong password"
        })
    }
     const JWT_SECRET=process.env.JWT_SECRET

    const token= await generateToken(user._id,JWT_SECRET)
    res.cookie("token",token)

    res.json({
        success:true,
        message:"login success"
    })

}