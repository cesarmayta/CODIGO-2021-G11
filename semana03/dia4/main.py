from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy.sql import text

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/db_matricula'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

db = SQLAlchemy(app)
ma = Marshmallow(app)

#CREAMOS SCHEMAS
class AlumnoSchema(ma.Schema):
    class Meta:
        fields = ('alumno_id','alumno_nombre'
                  ,'alumno_email')

class ProfesorSchema(ma.Schema):
    class Meta:
        fields = ('id','nombre')
        
class CatalogoSchema(ma.Schema):
    class Meta:
        fields = ('id','nombre')

@app.route('/')
def index():
    return jsonify({
        'mensaje':'BIENVENIDO A MI API'
    })
    
@app.route('/alumnos')
def alumnos():
    schemaAlumnos = AlumnoSchema(many=True)
    tuplaAlumnos = db.engine.execute('select * from tbl_alumno')
    listaAlumnos = list(tuplaAlumnos)
    dataAlumnos = schemaAlumnos.dump(listaAlumnos)
    return jsonify(dataAlumnos)

@app.route('/alumno',methods=['POST'])
def registraAlumno():
    nombre = request.json['nombre']
    #db.engine.execute(text("CALL registrar_alumno(:param)"),param=nombre)
    conn = db.engine.raw_connection()
    conn.cursor().callproc('registrar_alumno',[nombre])
    conn.close()
    #db.session.commit()
    #db.engine.execute("insert into tbl_alumno(alumno_nombre) values('LUIS LAURA')")
   
    return jsonify({'mensaje':'registro exitoso'})
    

@app.route('/profesores')
def profesores():
    schemaProfesores = ProfesorSchema(many=True)
    tuplaProfesores = db.engine.execute("CALL listar_profesores()")
    listaProfesores = list(tuplaProfesores)
    dataProfesores = schemaProfesores.dump(listaProfesores)
    return jsonify(dataProfesores)

@app.route(('/cursos/<id>'))
def cursosPorAlumno(id):
    schemaCursos = CatalogoSchema(many=True)
    tuplaCursos = db.engine.execute(text("CALL sp_cursosxalumno(:param)"),param=id)
    listaCursos = list(tuplaCursos)
    dataCursos = schemaCursos.dump(listaCursos)
    return jsonify(dataCursos)

if __name__ == "__main__":
    app.run(debug=True,port=5000)