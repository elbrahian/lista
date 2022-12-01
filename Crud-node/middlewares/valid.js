const {validationResult}=require('exprees-validatior')
const validar=(req,res,next)=>{
    const error=validationResult(req)
    if (!error.isEmpty()){
        return res.status(400).json()
    }
    next()
}
module.exports=validar 