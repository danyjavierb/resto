const { DataTypes } = require ('sequelize');
const sequelize = require ('./../config/db');
const usuarios = require('./usuarios');

const rol = sequelize.define('rol', {
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    }
});


module.exports = rol;