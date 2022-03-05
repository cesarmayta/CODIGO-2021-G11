const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Project = sequelize.define(
    'project',
    {
     id: {
         type:Sequelize.INTEGER,
         primaryKey:true,
         autoIncrement: true,
     } ,
     name:{
         type:Sequelize.STRING
     }  
    },
    {
        timestamps: false
    }
)
module.exports = Project;