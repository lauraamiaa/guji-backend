"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.customer);
      order.belongsToMany(models.coffee, {
        through: "orderCoffees",
        foreignKey: "orderId",
      });
      order.belongsToMany(models.weight, {
        through: "orderCoffees",
        foreignKey: "orderId",
      });
      order.belongsToMany(models.grind, {
        through: "orderCoffees",
        foreignKey: "orderId",
      });
    }
  }
  order.init(
    {
      status: { type: DataTypes.BOOLEAN, defaultValue: true },
      streetAndHouseNumber: { type: DataTypes.STRING, allowNull: false },
      additionalInfo: { type: DataTypes.STRING },
      postalCode: { type: DataTypes.STRING },
      city: { type: DataTypes.STRING },
      country: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
