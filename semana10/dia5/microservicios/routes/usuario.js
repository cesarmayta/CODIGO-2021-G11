const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {config} = require('../config');

const mysqlConnection = require('../lib/mysql');

router.post('/usuario',async (req,res)=>{
    try{
        console.log("creación de nuevo usuario")
        const {nombre,password} = req.body;
        const usuario_pas = await bcrypt.hash(password,10);
        console.log('usuario :' + nombre);
        console.log('password: ' + password);
        console.log('password encriptado: ' + usuario_pas);
        await mysqlConnection.query('insert into tbl_usuario(usuario_nom,usuario_pas) values(?,?)',
        [nombre,usuario_pas],(err,usuarioId,fields)=>
        {
            if(!err){
                const token = jwt.sign(
                    {usuario_id:usuarioId},
                    config.secret_key,
                    {
                        expiresIn:'2h'
                    }
                )
                res.json({
                    status:true,
                    content:token
                })
            }
        })
    }catch(error){
        console.log(error)
    }
    
})

module.exports = router;