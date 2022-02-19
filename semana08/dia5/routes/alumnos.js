const express = require('express');
const { restart } = require('nodemon');
const AlumnosService = require('../services/alumnos');

function alumnosApi(app){
    //ruta principal de alumnos
    const router = express.Router();
    app.use("/alumnos",router);

    const alumnosService = new AlumnosService();

    router.get("/",async function(req,res,next){
        try{
            const alumnos = await alumnosService.getAll();
            res.status(200).json({
                status:true,
                content:alumnos
            })
        }
        catch(err){
            next(err);
        }
    })

    //metodo post para alumnos
    router.post("/",async function(req,res,next){
        const {body: alumno} = req;
        console.log(alumno);
        try{
            const crearAlumno = await alumnosService.create({alumno});
                res.status(201).json({
                    status:true,
                    content:crearAlumno
            });
        }catch(err){
            next(err);
        }  
    })

    router.put("/:alumnoId",async function(req,res,next){
        const {alumnoId} = req.params;
        const {body:alumno} = req;

        try{
            const updateAlumnos = await alumnosService.update({alumno,alumnoId})
            res.status(200).json({
                status:true,
                content:'registro actualizado '
            })
        }catch(err){
            next(err);
        }
    })

    router.delete("/:alumnoId",async function(req,res,next){
        const {alumnoId} = req.params;

        try{
            const deleteAlumnos = await alumnosService.delete({alumnoId})
            res.status(200).json({
                status:true,
                content:'registro eliminado '
            })
        }catch(err){
            next(err);
        }
    })
}
module.exports = alumnosApi;