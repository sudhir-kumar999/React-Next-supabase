import User from "../models/user.js"

export const getUser=async(req,res)=>{
    const users = await User.find()
    console.log(users)
    if(!users){
        return res.json({
            success:false,
            message:"no user found"
        })
    }
    res.json({
        success:true,
        message:"user fetched",
        data:users
    })
}

export const deleteUser=async(req,res)=>{
    // const {id}=req.param.id
    await User.findByIdAndDelete(req.params.id)

    // if(!users){
    //     return res.json({
    //         success:false,
    //         message:"no user found"
    //     })
    // }
    res.json({
        success:true,
        message:"user deleted"
        // data:users
    })
}

