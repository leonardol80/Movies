const {Sequelize} = require('sequelize')
const config = require('../config')

const db = new Sequelize({
    dialect: 'postgres',
    host: config.db.host,  //? Variableentorno del host
    username: config.db.userName, //? Variable entorno del usuario
    password: config.db.password, //? Variable entorno de la contraseña
    database: config.db.name, //? Variable entorno del nombre de la base de datos
    port: config.db.port //?Variable entorno del puerto de la base de datos
})

module.exports = db