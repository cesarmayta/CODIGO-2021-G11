require('dotenv').config();

const config = {
    port: process.env.PORT,
    dbUser: process.env.DBUSER,
    dbHost: process.env.DBHOST,
    dbPassword: process.env.DBPASSWORD,
    dbDatabase: process.env.DBDATABASE,
    secret_key: process.env.SECRET_KEY,
    categorias:{
        port: process.env.CATEGORIAS_PORT
    },
    mesas: {
        port: process.env.MESAS_PORT
    }
}

module.exports = {config};