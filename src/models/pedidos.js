const { DataTypes } = require ('sequelize');
const sequelize = require ('./../config/db');
const formasPago = require('./formasPago');
const pedidosHasProductos = require('./pedidosHasProductos');
const productos = require('./productos');

const pedidos = sequelize.define('pedidos', {
    precio_total: {
        type: DataTypes.DECIMAL,
        allowNull:false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull:true
    }
}, {
    timestamps: false
  });


pedidos.belongsTo(formasPago,{
    foreignKey: 'formas_pago_id'
})

pedidos.belongsToMany(productos, {
    through: pedidosHasProductos
});


module.exports = pedidos;