const express = require('express');
const AlumnosService = require('../services/alumnos');

function alumnosApi(app){
    const router = express.Router();
    app.use('/alumnos',router);

    const alumnoSer = new AlumnosService();

    router.get('/',async function(req,res,next){
        try{
            const alumnos = await alumnoSer.getAll();

            res.status(200).json({
                status:true,
                content:alumnos
            })
        }catch(err){
            next(err);
        }
    });

    router.post('/',async function(req,res,next){
        const {body:alumno} = req;
        
        try{
            const createAlumnoId = await alumnoSer.create({alumno});
            res.status(201).json({
                status:true,
                content:'alumno creado con id ' + createAlumnoId
            })
        }
        catch(err){
            next(err);
        }
    })

    router.put('/:alumnoId',async function(req,res,next){
        const { alumnoId } = req.params;
        const {body:alumno} = req;
        
        try{
            const updateAlumnoId = await alumnoSer.update({alumnoId,alumno});
            res.status(201).json({
                status:true,
                content:'alumno actualizado con id ' + updateAlumnoId
            })
        }
        catch(err){
            next(err);
        }
    })

    router.delete('/:alumnoId',async function(req,res,next){
        const { alumnoId } = req.params;
        
        try{
            const deleteAlumnoId = await alumnoSer.delete({alumnoId});
            res.status(200).json({
                status:true,
                content:'alumno eliminado con id ' + deleteAlumnoId
            })
        }
        catch(err){
            next(err);
        }
    })

  

}

module.exports = alumnosApi;