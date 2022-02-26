const usuarioController = {};

const usuarioModel = require('../models/usuarios');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const {config} = require('../config');

const bcrypt = require('bcryptjs');

usuarioController.getAll = async (req,res)=>{
    const usuarios = await usuarioModel.find();
    res.json(usuarios);
}

usuarioController.create = async (req,res) =>{
    const {usuario,password} = req.body;

    //encriptamos el password
    passwordEncriptado = await bcrypt.hash(password,10);
    console.log("password encriptado : ",passwordEncriptado)

    const nuevousuario = new usuarioModel({
        usuario:usuario,
        password:passwordEncriptado
    })
    await nuevousuario.save();

    //creamos el token
    const token = jwt.sign(
        {usu_id: nuevousuario._id},
        config.secret_key,
        {
            expiresIn:'2h'
        }
    );
    nuevousuario.token = token;

    res.json({
        status:true,
        content:nuevousuario
    })
}

usuarioController.login = async (req,res) =>{
    const {usuario,password} = req.body;
    //buscamos si existe un usuario con el valor enviado
    const loginUsuario = await usuarioModel.findOne({usuario});

    if(loginUsuario && (await bcrypt.compare(password,loginUsuario.password))){
        const token = jwt.sign(
            {usu_id: loginUsuario._id,usu_name: loginUsuario.usuario},
            config.secret_key,
            {
                expiresIn:'2h'
            }
        )
        loginUsuario.token = token;
        res.status(200).json(loginUsuario);
    }
    else{
        res.status(400).json({
            status:false,
            content:'usuario o password no validos'
        })
    } 
}

module.exports = usuarioController;