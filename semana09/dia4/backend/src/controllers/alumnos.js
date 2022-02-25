const alumnoController = {};

const alumnoModel = require('../models/alumnos');
const boom = require('@hapi/boom');

alumnoController.getAll = async (req,res)=>{
    const alumnos = await alumnoModel.find();
    res.json(alumnos);
}

alumnoController.create = async (req,res) =>{
    const {nombre,email} = req.body;
    const nuevoAlumno = new alumnoModel({
        nombre,
        email
    })
    await nuevoAlumno.save();
    res.json({
        status:true,
        content:'alumno creado con exito'
    })
}

alumnoController.getById = async (req,res,next) =>{
    try{
        const alumno = await alumnoModel.findById(req.params.id);
        if(!alumno){
            res.json(boom.notFound('alumno no existe'))
        }
        res.json(alumno);
        //throw new Error('es es mi error de prueba')
    }catch(err){
        next(err);
    }
}

module.exports = alumnoController;