const Sequelize = require('sequelize');
const {config} = require('../config');

const sequelize = new Sequelize(config.pg_db, config.pg_user, config.pg_pwd, {
    host: config.pg_host,
    port: config.pg_port,
    dialect: 'postgres'
})



//sequelize.sync();
module.exports = sequelize;