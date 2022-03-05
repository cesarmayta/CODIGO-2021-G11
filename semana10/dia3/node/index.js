const express = require('express');
const {config} = require('./config');
const app = express();

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'servidor activo'
    })
})


app.listen(config.port,()=>console.log(`servidor en http://localhost:${config.port}`))

/**************** CREACION DE BD ***********************/
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.pg_db, config.pg_user, config.pg_pwd, {
    host: config.pg_host,
    port: config.pg_port,
    dialect: 'postgres'
  })


sequelize.authenticate()
.then(()=>{
    console.log("conexion a bd exitosa")
})
.catch(err=>{
    console.log("error : "+err)
})

//creación de modelos
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

const Task = sequelize.define(
    'task',
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        name:{
            type:Sequelize.STRING
        },
        done:{
            type: Sequelize.BOOLEAN
        }
    }
)

//creamos relaciones entre 2 tablas
Project.hasMany(Task,{foreinkey:'projectid',sourceKey:'id'});
Task.belongsTo(Project,{foreinkey:'projectid',targetId:'id'});

//migramos a la bd
sequelize.sync({force:true})
.then(()=>{
    console.log("tablas migradas")
    Project.bulkCreate(
        [
            {name:'tiendatech'},
            {name:'proyecto final'}
        ]).then(function(){
            return Project.findAll();
        }).then(function(proyectos){
            console.log(proyectos);
        });

    Task.bulkCreate(
        [
            {name:'crear base de datos',done:true,projectId:1},
            {name:'crear cruds',done:false,projectId:2}
        ]).then(function(){
            return Task.findAll();
        }).then(function(tareas){
            console.log(tareas);
        });
})