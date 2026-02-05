import mongoose from "mongoose"

const connectDB= async()=>{
    const MONGO_URI=process.env.MONGO_URI
    await mongoose.connect(MONGO_URI)
    console.log("DB connected")
}

export default connectDB