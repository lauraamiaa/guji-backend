"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          customerId: 1,
          totalPrice: 7.5,
          status: "created",
          firstName: "Test",
          lastName: "Order",
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
