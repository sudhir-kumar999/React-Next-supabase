import jwt from "jsonwebtoken"

export const generateAccessToken = (userId , secret)=>{
    return jwt.sign(userId , secret)
}


export const generateRefreshToken =(userId , secret)=>{
    return jwt.sign(userId , secret)
}