const express = require('express');
const app = express();

const {config} = require('./config');
const alumnosApi = require('./routes/alumnos');

//middlewares
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        'status':true,
        'content':'SERVIDOR CORRIENDO'
    })
})

alumnosApi(app);

app.listen(config.port,function(){
    console.log(`SERVIDOR CORRIENDO EN http://localhost:${config.port}`)
})