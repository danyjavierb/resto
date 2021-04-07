const { DataTypes } = require ('sequelize');
const sequelize = require ('./../config/db');


const rol = sequelize.define('rol', {
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    }
}, {
    timestamps: false
  });


module.exports = rol;