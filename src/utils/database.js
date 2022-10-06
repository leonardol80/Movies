const {Sequelize} = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'QSECORF04',
    database: 'movies_crud',
    port: 5432
})

module.exports = db