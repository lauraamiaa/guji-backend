"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class weight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      weight.belongsToMany(models.order, {
        through: "orderCoffees",
        foreignKey: "weightId",
      });
    }
  }
  weight.init(
    {
      weight: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "weight",
    }
  );
  return weight;
};