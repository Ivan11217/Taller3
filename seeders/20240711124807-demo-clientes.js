'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clientes', [{
      nombre: 'Juan',
      apellido: 'Pérez',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'María',
      apellido: 'López',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};
