const Producto=require('../models/Producto')
const nombrevalid=async(nombre='')=>{
    const nom=await Producto.findOne({nombre})
    if (nom){
        throw new Error(`El Producto: ${nombre}, ya está registrado`);
    }
}
const idvalid=async(id='')=>{
    const user=await Producto.findById(id)
    if (!user){
        return res.status(401).json({
            msg:`El producto con id:${id} no existe`
        })
    }
}
module.exports=nombrevalid;
