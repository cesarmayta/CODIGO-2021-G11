const express = require('express')

const app = express()
const port = 5000

app.get('/',(req,res)=>{
    res.send('<center><h1>BIENVENIDO A MI SERVIDOR :  CÉSAR MAYTA</h1></center>')
})

app.get('/json',function(req,res){
    res.json({
        nombre:'cesar mayta',
        email:'cesarmayta@gmail.com'
    })
})


app.get('/saludar/:nombre',function(req,res){
    res.send("HOLA " + req.params.nombre)
})

app.get('/formulario',function(req,res){
    html = "<form action='http://localhost:5000/saludopost' method='POST'>"
    html += "<input type='text' name='nombre'/>"
    html += "<input type='submit' name='saludar' />"
    html += "</form>"
    res.send(html)
})

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/saludopost',function(req,res){
    html = "<H1>HOLA COMO ESTAS " + req.body.nombre + "</H1>"
    res.send(html)
})

app.listen(port,function(){
    console.log('Servidor corriendo en http://localhost:' + port)
})