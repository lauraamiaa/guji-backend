"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orderCoffees",
      [
        {
          orderId: 1,
          coffeeId: 1,
          weight: "250 GR",
          grind: "whole beans",
          quantity: 1,
          totalPrice: 7.5,
          status: "order created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          coffeeId: 2,
          weight: "250 GR",
          grind: "whole beans",
          quantity: 1,
          totalPrice: 10,
          status: "order created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          coffeeId: 3,
          weight: "250 GR",
          grind: "whole beans",
          quantity: 1,
          totalPrice: 10,
          status: "order created",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orderCoffees", null, {});
  },
};
