'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    fecha: DataTypes.DATE,
    estado: DataTypes.STRING
  }, {});
  Pedido.associate = function(models) {
    // asociaciones aquí
    Pedido.belongsTo(models.Cliente, {foreignKey: 'clienteId', as: 'cliente'});
  };
  return Pedido;
};
