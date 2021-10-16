"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderCoffee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderCoffee.belongsTo(models.order);
      orderCoffee.belongsTo(models.coffee);
    }
  }
  orderCoffee.init(
    {
      coffeeId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      weight: DataTypes.STRING,
      grind: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "orderCoffee",
    }
  );
  return orderCoffee;
};
