const MongoLib = require('../lib/mongo');

class AlumnosService{
    constructor(){
        this.collection = 'alumnos';
        this.mongoDB = new MongoLib();
    }

    async getAll(){
        const data = await this.mongoDB.query(this.collection,{});
        return data || [];
    }

    async create({alumno}){
        const crearAlumnoId = await this.mongoDB.create(this.collection,alumno);
        return crearAlumnoId;
    }

    async update({alumnoId,alumno}){
        const updateAlumnoId = await this.mongoDB.update(
            this.collection,
            alumnoId,
            alumno
        );
        return updateAlumnoId;
    }

    async delete({alumnoId}){
        const deleteAlumnoId = await this.mongoDB.delete(
            this.collection,
            alumnoId
        );
        return deleteAlumnoId;
    }


}

module.exports = AlumnosService;