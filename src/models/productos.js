const { DataTypes } = require ('sequelize');
const sequelize = require ('./../config/db');
const pedidos = require('./pedidos');
const pedidosHasProductos = require('./pedidosHasProductos');

const productos = sequelize.define('productos', {
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    precio: {
        type: DataTypes.DECIMAL,
        allowNull:false
    },
    activo: {
        type: DataTypes.TINYINT,
        allowNull:false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull:false
    },
});



module.exports = productos;