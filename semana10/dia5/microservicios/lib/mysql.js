const mysql = require('mysql');
const {config} = require('../config/index');

const mysqlConnection = mysql.createConnection({
    host:config.dbHost,
    user:config.dbUser,
    password:config.dbPassword,
    database:config.dbDatabase
})

mysqlConnection.connect(function (err) {
    if(err){
        console.error(err);
        return;
    }else{
        console.log('conexión exitosa a base de datos');
    }
});

module.exports = mysqlConnection;