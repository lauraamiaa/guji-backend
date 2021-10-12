"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          status: true,
          customerId: 1,
          streetAndHouseNumber: "Street 1",
          additionalInfo: "Suite 1",
          postalCode: "1058 DE",
          city: "Amsterdam",
          country: "The Netherlands",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
