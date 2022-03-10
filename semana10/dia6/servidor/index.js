const {createServer} = require('http');
const {Server} = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000"
    }
  });
  
httpServer.listen(5005,()=> console.log("servidor socket iniciado"));


io.on("connection",(socket)=> {
    let usuario;
    console.log("nueva conexión por websocket : ",socket.id);

    socket.on("usuario",(usu)=>{
        usuario = usu;
        console.log(`${usuario} ha entrado a la sala de chat`);
    })

    socket.on("mensaje",(nombre,mensaje) => {
        console.log(`${nombre} envio mensaje : ${mensaje}`);
        io.emit("mensajes",{nombre,mensaje});
    })
})
