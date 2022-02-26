const express = require('express');
const cors = require('cors');

const {config} = require('./config');

const {errorHandler,metodo,logErrors,boomErrorHandler} = require('./middlewares/error.handler');

const app = express();

app.use(metodo);
//configuraciones
app.set('port',config.port);

//middlewares
app.use(cors()); // permite conexiones de otro servidor como react
app.use(express.json()); // permite recibir data en json hacia el servidor

//vistas - routes
app.get('/',(req,res)=>res.json({content:'api ok'}))
// vista alumnos
app.use('/alumnos',require('./routes/alumnos'));

//handlers
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = app;

