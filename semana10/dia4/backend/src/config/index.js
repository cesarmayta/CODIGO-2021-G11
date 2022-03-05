require('dotenv').config();

const config = {
    port : process.env.PORT || 5000,
    pg_host : process.env.POSTGRESQL_ADDON_HOST,
    pg_db : process.env.POSTGRESQL_ADDON_DB,
    pg_user : process.env.POSTGRESQL_ADDON_USER,
    pg_pwd : process.env.POSTGRESQL_ADDON_PASSWORD,
    pg_port : process.env.POSTGRESQL_ADDON_PORT,
}

module.exports = {config};