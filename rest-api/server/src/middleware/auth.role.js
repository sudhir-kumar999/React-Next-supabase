

export const authorizeRoles=(...roles)=>{
    return (req,res,next)=>{
        console.log("ROLE FROM TOKEN:", req.user.role);

        if(!req.user || !roles.includes(req.user.role)){
            return res.json({
                success: false,
                message: "Access denied",
            })
        }
        next()
    }
}