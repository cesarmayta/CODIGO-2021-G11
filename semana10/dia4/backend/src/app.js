const express = require('express');
const {config} = require('./config');

const app = express();
app.set('port',config.port);

//middlewares
app.use(express.json());

//importamos routes
const projectRoutes = require('./routes/projects');
//rutas
app.get('/',(req,res)=>res.json({status:true,content:'api activa'}));
app.use('/projects',projectRoutes);

module.exports = app
