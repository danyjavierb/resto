const { DataTypes } = require ('sequelize');
const sequelize = require ('./../config/db');
const pedidos = require('./pedidos');
const productos = require('./productos');

const pedidosHasProductos = sequelize.define('pedidos_has_productos', {
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    pedidos_id: {
        type: DataTypes.INTEGER,
        references: {
            model:pedidos,
            key:'id'
        }
    },
    productos_id: {
        type: DataTypes.INTEGER,
        references: {
            model:productos,
            key:'id'
        }
    }
}, {
    timestamps: false
  });


module.exports = pedidosHasProductos;