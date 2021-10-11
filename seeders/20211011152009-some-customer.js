"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "customers",
      [
        {
          email: "test@test.com",
          password: "test1234",
          firstName: "Test",
          lastName: "Admin",
          phone: "123456",
          address: "Some address",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "customer@test.com",
          password: "customer1234",
          firstName: "Test",
          lastName: "Customer",
          phone: "123456",
          address: "Some address",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("customers", null, {});
  },
};
