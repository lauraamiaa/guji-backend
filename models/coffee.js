"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class coffee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  coffee.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      shortDescription: { type: DataTypes.STRING, allowNull: false },
      longDescription: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "coffee",
    }
  );
  return coffee;
};
