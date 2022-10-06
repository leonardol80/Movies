const { types } = require('pg')
const {DataTypes} = require('sequelize')  //?Datatypes contiene los tipos de datos

const db = require('../utils/database')

const Movies = db.define('movies',{  //?Define el nombre de la tabla
    id:{
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false  //No puede recibir valor nulo (Not Null)
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'release_date'  //?Indica como se guarda el campo en la BD
    }
})

module.exports = Movies