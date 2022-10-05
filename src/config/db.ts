const { Sequelize, DataTypes } = require('sequelize');

let db_name, db_username, db_password

if(process.env.NODE_ENV === 'development') {
  db_name = process.env.DB_NAME
  db_username = process.env.DB_USERNAME
  db_password = process.env.DB_PASS
} else {
  db_name = process.env.PRODUCTION_DB_NAME
  db_username = process.env.PRODUCTION_DB_USERNAME
  db_password = process.env.PRODUCTION_DB_PASS
}

const sequelize = new Sequelize(db_name, db_username, db_password, {
  host: 'localhost',
  dialect: 'mysql'
});

export { sequelize, DataTypes };