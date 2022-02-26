const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlumnosSchema = new Schema({
    nombre:String,
    email:String
})

module.exports = mongoose.model('alumnos',AlumnosSchema);
