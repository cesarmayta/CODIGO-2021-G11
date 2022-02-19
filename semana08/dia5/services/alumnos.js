const SqlServerLib = require('../lib/sqlserver');

class AlumnosService{
    constructor(){
        this.sql = new SqlServerLib();
    }

    async getAll(){
        const sqlAll = "select * from tbl_alumno";
        const result = await this.sql.querySql(sqlAll);
        return result.recordsets;
    }

    async create({alumno}){
        const sqlCreate = `insert into tbl_alumno(alumno_nombre,alumno_email)
                           values('${alumno.nombre}','${alumno.email}')`;

        await this.sql.querySql(sqlCreate);
        const sqlNuevoId = "select max(alumno_id) as id from tbl_alumno";
        const result = await this.sql.querySql(sqlNuevoId);
        return result.recordsets;
    }

    async update({alumno,alumnoId}){
        const sqlUpdate = `update tbl_alumno set alumno_nombre='${alumno.nombre}',
                           alumno_email='${alumno.email} '
                           where alumno_id='${alumnoId}'`
        await this.sql.querySql(sqlUpdate);
    }

    async delete({alumnoId}){
        const sqlDelete = `delete from tbl_alumno where alumno_id='${alumnoId}'`;
        await this.sql.querySql(sqlDelete);
    }
}

module.exports = AlumnosService;