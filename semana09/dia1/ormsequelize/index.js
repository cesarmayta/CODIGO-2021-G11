const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.json({
        status:true,
        content:"SERVIDOR CORRIENDO"
    })
})

const port = 5000;
app.listen(port,()=>console.log(`servidor corriendo en http://localhost:${port}`));

/*************** TRABAJANDO CON SEQUELIZE ***************/
const  Sequelize = require('sequelize');


const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./database.sqlite'
})



sequelize.authenticate()
.then(()=>{
    console.log("conexión establecida")
})
.catch(err=>{
    console.log("error en la conexión ")
})

///creamos modelos

const Alumnos = sequelize.define(
    'alumnos',
    {
        nombre:Sequelize.STRING,
        email:Sequelize.STRING
    }
)
//migración de modelos

sequelize.sync({force:true})
.then(()=>{
    console.log("tablas migradas");
    //poblamos data de prueba
    Alumnos.bulkCreate(
        [
            {nombre:'cesar mayta',email:'cesarmayta@gmail.com'},
            {nombre:'Diego Valdera',email:'diegovaldera@google.com'},
            {nombre:'Dora Callisaya',email:'dora.callisaya@microsoft.com'}
        ]).then(function(){
            return Alumnos.findAll();
        }).then(function(alumnos){
            console.log(alumnos);
        })
})

/**************** CREAMOS LOS ENDPOINTS **********/
app.get('/alumnos',(req,res)=>{
    Alumnos.findAll()
    .then(
        alumnos => res.json(alumnos)
    )
})

app.get('/alumnos/:id',(req,res)=>{
    Alumnos.findAll({where : {id:req.params.id}})
    .then(
        function(alumnos){
            res.json(alumnos)
        }
    )
})

app.use(express.json());
app.post('/alumnos',(req,res)=>{
    Alumnos.create(
        {
            nombre: req.body.nombre,
            email: req.body.email
        }
    ).then(function(alumnos){
        res.json(alumnos);
    })
})

app.put('/alumnos/:id',(req,res)=>{
    Alumnos.findByPk(req.params.id)
    .then(function(alumnos){
        alumnos.update({
            nombre:req.body.nombre,
            email:req.body.email
        }).then(function(alumnos){
            res.json(alumnos);
            });
    })
})

app.delete('/alumnos/:id',(req,res)=>{
    Alumnos.findByPk(req.params.id)
    .then(function(alumnos){
        alumnos.destroy();
    }).then(function(alumnos){
        res.sendStatus(200);
    })
})