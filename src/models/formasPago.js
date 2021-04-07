const { DataTypes } = require ('sequelize');
const sequelize = require ('./../config/db');


const formasPago = sequelize.define('formas_pago', {
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    activo: {
        type: DataTypes.TINYINT,
        allowNull:false
    },
}, {
    timestamps: false
  });


module.exports = formasPago;