'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pedidos', [{
      fecha: new Date(),
      clienteId: 1, // Asegúrate de que este ID exista en tu base de datos o ajusta según sea necesario
      estado: 'En proceso',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pedidos', null, {});
  }
};
