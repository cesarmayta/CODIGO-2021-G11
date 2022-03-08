const express = require('express');
const {config} = require('../config');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'Microservicio mesas listo'
    })
})

app.use(require('../routes/mesa'));

app.listen(config.mesas.port,function(){
    console.log(`ms categorias : http://localhost:${config.mesas.port}`);
})