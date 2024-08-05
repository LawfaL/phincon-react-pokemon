"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemons.init(
    {
      name: DataTypes.STRING,
      hp: DataTypes.INTEGER,
      att: DataTypes.INTEGER,
      def: DataTypes.INTEGER,
      str: DataTypes.INTEGER,
      spd: DataTypes.INTEGER,
      crit: DataTypes.INTEGER,
      renameCounter: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Pokemons",
    }
  );
  return Pokemons;
};
