'use strict';
const { Model } = require('sequelize');
const User = require('./user');

module.exports = (sequelize, DataTypes) => {

  class Role extends Model {
    static associate(models) {
      /* Role.User = Role.belongsTo(models.User);
      Role.Permission = Role.hasMany(models.Permission, {
        onDelete: 'cascade'
      }) */
    }
  }
  
  Role.init({
    role_name: DataTypes.STRING,
    permissions: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Role',
  });

  return Role;

};