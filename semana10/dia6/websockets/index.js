const express = require('express');
const app = express();

app.set('port',process.env.PORT || 5000);

/************** levantando archivos estaticos ******/
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));


const server = app.listen(app.get('port'),()=>{
    console.log(`servidor corriendo en http://localhost:${app.get("port")}`);
})


/*************** WEB SOCKETS ***************/
const SocketIO = require('socket.io');

const io = SocketIO(server);

io.on('connection',(socket)=>{
    console.log("nueva conexión por websocket : ",socket.id);
    //io.sockets.emit('mensajeservidor',socket.id);
    //lee mensajes del cliente y los envia a los demas clientes
    socket.on('mensajecliente',(data)=>{
        console.log('mensaje de cliente :',data);
        io.sockets.emit('mensajeservidor',data)
    })
})
