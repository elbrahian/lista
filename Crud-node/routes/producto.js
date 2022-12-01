const {Router}=require('express')
const {obtenerproducto,crearproducto, atulizarproducto, categoriaid, categoriadelete} = require('../controllers/productocontrol');
const nombrevalid = require('../models/db-valid');
const router=Router()


//api/producotos
router.post('/',crearproducto)
router.get('/',obtenerproducto)
router.put('/:id',atulizarproducto)
router.get('/:id',categoriaid)
router.delete('/:id',categoriadelete)




module.exports=router;