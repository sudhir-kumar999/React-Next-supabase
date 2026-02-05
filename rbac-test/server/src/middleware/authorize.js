export const authorize=(...roles)=>{
    return (req,res,next)=>{
        const role=req.user.role;
        // console.log(req.user)
    if(!roles.includes(role)){
        return res.json({
            success:false,
            message:"access denied"
        })
    }
    next()
    }
}