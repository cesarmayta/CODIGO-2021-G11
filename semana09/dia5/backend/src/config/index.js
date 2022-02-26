require('dotenv').config();

const config = {
    port : process.env.PORT || 5000,
    mongoUri : process.env.MONGOURI || 'mongodb://127.0.0.1:27017/dbcodigo',
    secret_key: process.env.SECRET_KEY || 'eq[zDEvdr1+KDq0'
}

module.exports = {config};