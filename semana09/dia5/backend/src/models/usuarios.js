const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    usuario:String,
    password:String,
    token:String
})

module.exports = mongoose.model('usuarios',UsuariosSchema);