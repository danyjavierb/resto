const { DataTypes } = require ('sequelize');
const sequelize = require ('./../config/db');
const pedidos = require('./pedidos');

const formasPago = sequelize.define('formas_pago', {
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    activo: {
        type: DataTypes.TINYINT,
        allowNull:false
    },
});


module.exports = formasPago;