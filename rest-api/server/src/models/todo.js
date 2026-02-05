import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:String,
    completed:{
        type:Boolean,
        default:false
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})

const Todo = mongoose.model("Todo",todoSchema)
export default Todo;