const express = require('express');
const app = express();
const boom = require('@hapi/boom');

//MIDDLEWARES PRINCIPALES
app.use(function(req,res,next){
    console.log('Tiempo : ',Date.now());
    next();
})

//rutas
app.get("/",(req,res)=>{
    res.json({
        status:true,
        content:"EJEMPLOS CON MIDDLEWARES"
    })
})

//middlware para ruta usuario
app.use('/usuario',function(req,res,next){
    console.log(a + 3);
    console.log('tipo request : ',req.method);
    next();
})

app.get("/usuario",(req,res)=>{
    res.json({
        status:true,
        content:[{
            nombre:'cmayta',
            email:'cesarmayta@gmail.com'
        }]
    })
})


//MIDDLEWARE PARA ERRORES
app.use(function(err,req,res,next){
    res.json(boom.badImplementation())
})

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).json({
        status:false,
        content:'ocurrio un error en el servidor'
    })
})

app.listen(5000,function(){
    console.log('servidor corriendo en http://localhost:5000');
})