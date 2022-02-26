const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    usuario:{type:String,unique:true},
    password:{type:String},
    token:{type: String,default:null}
})

module.exports = mongoose.model('usuarios',UsuariosSchema);