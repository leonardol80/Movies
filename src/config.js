//? const dotenv = require('dotenv') Igual a la linea 3
//? dotenv.config() Junto a la linea 1 hacen lalinea 3

//? Habilita acceder a las variables de entorno
//? config es la variable declarada linea 7
require('dotenv').config() 

const config = {
    port: process.env.PORT || 8000 , //?Mismo nombre de var.ent que esta en env
    nodeEnv: process.env.NODE_ENV || 'development',
    db: {
        port: process.env.DB_PORT || 5432,
        userName: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'root',
        host: process.env.DB_HOST || 'localhost',
        name: process.env.DB_NAME
    }
}
module.exports=config;