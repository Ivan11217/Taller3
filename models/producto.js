'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    descrip: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL
  }, {});
  Producto.associate = function(models) {
    // relaciones si es necesario
  };
  return Producto;
};
