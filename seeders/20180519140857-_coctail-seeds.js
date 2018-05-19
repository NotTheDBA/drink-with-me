'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('Category', [{
                general: 'Cocktail',
                specific: '',
                cocktailDbId: 1
            },
            {
                general: 'Milk / Float / Shake',
                specific: '',
                cocktailDbId: 2
            },
            {
                general: 'Other/Unknown',
                specific: '',
                cocktailDbId: 3
            },
            {
                general: 'Cocoa / Coffee / Tea',
                specific: ''
            },
            {
                general: 'Shot',
                specific: '',
                cocktailDbId: 5
            },
            {
                general: 'Homemade Liqueur',
                specific: '',
                cocktailDbId: 7
            },
            {
                general: 'Punch / Party Drink',
                specific: '',
                cocktailDbId: 8
            },
            {
                general: 'Mocktail',
                specific: ''
            },
            {
                general: 'Bitters',
                specific: ''
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};