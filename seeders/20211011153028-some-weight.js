"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "weights",
      [
        {
          weight: "250 GR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          weight: "1 KG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("weights", null, {});
  },
};
