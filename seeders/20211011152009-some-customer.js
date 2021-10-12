"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "customers",
      [
        {
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          firstName: "Test",
          lastName: "Admin",
          phone: "123456",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "customer@test.com",
          password: bcrypt.hashSync("customer1234", SALT_ROUNDS),
          firstName: "Test",
          lastName: "Customer",
          phone: "123456",
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
