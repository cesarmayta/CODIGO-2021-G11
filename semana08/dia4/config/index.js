require('dotenv').config();

const config = {
    port : process.env.PORT || 5000,
    sqlserver_user : process.env.SQLSERVER_USER,
    sqlserver_pwd : process.env.SQLSERVER_PWD,
    sqlserver_host : process.env.SQLSERVER_HOST,
    sqlserver_db : process.env.SQLSERVER_DB
}

module.exports = {config};