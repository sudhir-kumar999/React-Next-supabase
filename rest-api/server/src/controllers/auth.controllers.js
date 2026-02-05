import User from "../models/user.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";

export const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Name email and password are required to sign in",
      });
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    if (!user) {
      return res.json({
        success: false,
        message: "No user found",
      });
    }
    res.json({
      success: true,
      message: "Registered successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "email and password is required",
      });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = password === user.password;
    // console.log(isMatch);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "wrong password",
      });
    }
    const Asecret = process.env.JWT_SECRET
    const token=generateAccessToken({id:user._id} , Asecret)
    console.log(token)
    res.cookie("access",token,{
        httpOnly: true,   // JS se access nahi
      secure: false,    // localhost ke liye false
      sameSite: "lax",  // CORS safe
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })

    const Rsecret = process.env.JWT_REFRESH
    const refreshToken = generateRefreshToken({id:user._id},Rsecret)
    res.cookie("refreshToken",refreshToken,{
        httpOnly: true,   // JS se access nahi
      secure: false,    // localhost ke liye false
      sameSite: "lax",  // CORS safe
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    res.json({
      success: true,
      message: "log in successful",
    });
  } catch (error) {
    console.log(error)
  }
};

export const protectRoute=(req,res)=>{
    res.json({
        success:true,
        user:req.user
    })
}

export const logoutController=(req , res)=>{
    res.cookie("access", "", {
    httpOnly: true,
    secure: false,     // localhost
    sameSite: "lax",
    expires: new Date(0), // 🔥 cookie expire
  });
return res.json({
    success: true,
    message: "Logged out successfully",
  });
}