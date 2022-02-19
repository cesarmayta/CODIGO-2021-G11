const express = require('express');
const app = express();

const {config} = require('./config')

app.get('/',(req,res)=>{
    res.json({
        'status':true,
        'content':'SERVIDOR CORRIENDO'
    })
})

app.listen(config.port,function(){
    console.log(`SERVIDOR CORRIENDO EN http://localhost:${config.port}`)
})