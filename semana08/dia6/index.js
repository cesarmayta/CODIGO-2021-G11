const express = require('express');
const app = express();

const { config } = require('./config');


//middlewares
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        status:true,
        content:'SERVIDOR CORRIENDO'
    })
})

//agregamos rutas de alumnos
const alumnosApi = require('./routes/alumnos');
alumnosApi(app);

app.listen(config.port,function(){
    console.log(`Servidor corriendo en http://localhost:${config.port}`);
})