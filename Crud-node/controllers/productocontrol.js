const { request, response } = require("express");
const Producto = require("../models/Producto");

//creacion producto
const crearproducto= async(req=request,res) => {
    const { nombre, categoria, ubicacion, precio, unidad } = req.body;
    producto = new Producto({ nombre, categoria, ubicacion, precio, unidad});
    const nombrevalid=await Producto.findOne({nombre})
    if(nombrevalid){
        return res.status(400).json({
            msg:`El Producto: ${nombre} Ya existe`
        })
    }else{
        await producto.save()
        res.send(producto)
    }
}
const obtenerproducto=async(req,res)=>{
    let{page, size}=req.query;
    const limit = parseInt(size);
    const producto=await Producto.find().limit(limit);
    res.send({
        page,
        size,
        producto
    });
}
const atulizarproducto=async(req,res)=>{
    const {id}=req.params;
    const producto=req.body;
    const usuario=await Producto.findByIdAndUpdate(id,producto);
    res.send({usuario})
}
const categoriaid=async(req,res=response)=>{
    const{id}=req.params;
    const categoria=await Producto.findById(id)
    res.json(categoria)
}
const categoriadelete=async(req, res=response)=>{
    const{id}=req.params;
    const producto=req.body;
    await Producto.findByIdAndRemove(id,producto) ;
    if(!id){
        return res.status(400).json({
            msg:`El id: ${id} No existe`
        })
    }
    return res.status(400).json({
        msg:`El Producto con ID: ${id} Fue eliminado`
    })
}
module.exports={
    crearproducto,
    obtenerproducto,
    atulizarproducto,
    categoriaid,
    categoriadelete
}
