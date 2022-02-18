const express = require('express');
const app = express();

//Settings
app.set('port',process.env.PORT || 5000);

//Middlewares
app.use(express.json());

//Routes
app.get('/',function(req,res){
    res.json({
        'status':true,
        'content':'Bienvenido a mi API'
    })
})

const mysqlConnection = require('./database');

app.get('/profesor',function(req,res){
    mysqlConnection.query('select * from tbl_profesor',(err,rows,fields)=> {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

app.post('/profesor',function(req,res){
    const {nombre} = req.body;
    const query = 'insert into tbl_profesor(profesor_nombre) values(?)';
    
    mysqlConnection.query(query,[nombre],(err,rows,fields)=>{
        if(!err){
            res.json({
                'status':true,
                'content':'profesor registrado'
            })
        }
        else{
            console.log(err);
        }
    })
})

app.put('/profesor/:id',function(req,res){
    const {nombre} = req.body;
    const {id} = req.params;
    const query = `update tbl_profesor set
                  profesor_nombre=? where profesor_id=?`

    mysqlConnection.query(query,[nombre,id],
        (err,rows,fields)=>{
        if(!err){
            res.json({
                'status':true,
                'content':'profesor actualizado'
            })
        }else{
            console.log(err);
        }
    })
})

app.delete('/profesor/:id',function(req,res){
    const {id} = req.params;
    const query = `delete from tbl_profesor 
                    where profesor_id=?`

    mysqlConnection.query(query,[id],
        (err,rows,fields)=>{
        if(!err){
            res.json({
                'status':true,
                'content':'profesor eliminado'
            })
        }else{
            console.log(err);
        }
    })
})



//Server
app.listen(app.get('port'),() =>{
    console.log(`Server running at http://localhost:${app.get('port')}`);
})
