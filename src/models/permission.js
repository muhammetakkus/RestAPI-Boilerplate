module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define("Permission", {
    permission_title: DataTypes.STRING,
    permissions: DataTypes.STRING,
  });
  
  Permission.associate = (models) => {
    Permission.belongsTo(models.Role)
  }

  return Permission;
};