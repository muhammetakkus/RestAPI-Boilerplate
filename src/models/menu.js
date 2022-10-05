'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    static associate(models) {
      // define association here
    }
  }
  
  Menu.init({
    menu_title: DataTypes.STRING,
    menu_url: DataTypes.STRING,
    menu_type: DataTypes.STRING,
    menu_permission: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Menu',
  });

  return Menu;
};