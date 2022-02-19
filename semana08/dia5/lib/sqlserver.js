const {config} = require('../config');
const sql = require('mssql');

class SqlServerLib{

    constructor(){
        this.dbSettings = {
            user: config.sqlserver_user,
            password: config.sqlserver_pwd,
            server: config.sqlserver_host,
            database: config.sqlserver_db,
            options : {
                encrypt: true,
                trustServerCertificate: true
            }
        }
    }

    async getConnection(){
        try{
            const pool = await sql.connect(this.dbSettings);
            //const result = await pool.request().query('select * from tbl_alumno');
            //console.log(result.recordsets);
            return pool;
        }catch(err){
            console.error(err);
        }
    }

    async querySql(sql){
        const pool = await this.getConnection();
        const result = pool.request().query(sql);
        return result
    }

}
//const pruebasql = new SqlServerLib();
//pruebasql.getConnection();
module.exports = SqlServerLib;
