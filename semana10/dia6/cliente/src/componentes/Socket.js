import io from "socket.io-client";

let socket = io("//localhost:5005");

export default socket;