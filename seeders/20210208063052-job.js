'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('jobs', [
      {
        id: 1,
        title: 'Teste 1',
        description: 'aaaaa',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Teste 2',
        description: 'bbbb',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Teste 3',
        description: 'cccc',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'Teste 4',
        description: 'dddd',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        title: 'Teste 5',
        description: 'eeee',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jobs', null, {});
  }
};
