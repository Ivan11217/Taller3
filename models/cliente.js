'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {});
  Cliente.associate = function(models) {
    Cliente.hasMany(models.Pedido, {foreignKey: 'clienteId'});
  };
  return Cliente;
};
