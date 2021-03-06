const { DataTypes } = require ('sequelize');
const sequelize = require ('./../config/db');

const usuarios = sequelize.define('usuarios', {
    username: {
        type: DataTypes.STRING,
        allowNull:false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull:false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull:false
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull:false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull:false
    }
}, {
    timestamps: false
  });

module.exports = usuarios;