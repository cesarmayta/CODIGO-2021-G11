const Joi = require('joi');

const nombre = Joi.string().min(3).max(15);
const email = Joi.string().email();

const createAlumnoSchema = Joi.object({
    nombre : nombre.required(),
    email : email.required()
});

module.exports = {createAlumnoSchema};