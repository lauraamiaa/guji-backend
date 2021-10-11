"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "grinds",
      [
        {
          grind: "whole beans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          grind: "filter",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          grind: "aeropress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          grind: "french press",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("grinds", null, {});
  },
};
