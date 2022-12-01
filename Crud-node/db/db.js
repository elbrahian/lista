const mongoose = require('mongoose')
require('dotenv').config({ path: '.env' })
const connect = async () => {
    try {
        await mongoose.connect(process.env.db_cnn, {
            useNewUrlParser: true,
        })
        console.log('Conexion Good')

    } catch (error) {
        console.log(error);
        console.log('Error en el server')
    }
}
module.exports = connect