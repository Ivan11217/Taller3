'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Productos', [{
      descrip: 'Laptop',
      stock: 10,
      precio: 999.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      descrip: 'Smartphone',
      stock: 15,
      precio: 499.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Productos', null, {});
  }
};
