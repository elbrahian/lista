const express=require('express')
const connect=require('./db/db')
const cors=require('cors')
//crear server
port=process.env.port
const app=express();
//conexion db
connect()
app.use(cors())
//enviar json
app.use(express.json())
//rutas
app.use('/api/productos',require('./routes/producto'))
app.listen(port)