const express = require('express');
const http = require('http');
const app = express();
const servidor = http.createServer(app);

//iniciar socketio
const socketio = require("socket.io");
const io = socketio(servidor);

io.on("connection",(socket)=> {
    let usuario;

    socket.on("usuario",(usu)=>{
        usuario = usu;
        console.log(`${usuario} ha entrado a la sala de chat`);
    })
})

servidor.listen(5005,()=> console.log("servidor socket iniciado"))