import tabulate
#FUNCIONES DE MI PROGRAMA
def menu():
    print("MARQUE LA OPCIÓN QUE DESEA EJECUTAR")
    print("[1] REGISTRAR ALUMNO")
    print("[2] MOSTRAR ALUMNOS")
    print("[3] ACTUALIZAR ALUMNO")
    print("[4] ELIMINAR ALUMNO")
    print("[5] SALIR DEL PROGRAMA")

    
def registrarAlumno(alumnos):
    #REGISTRAR ALUMNO
    print("==================================")
    print("     REGISTRO DE NUEVO ALUMNO     ")
    print("==================================")
    nombre =  input("NOMBRE : ")
    email =   input("EMAIL  : ")
    celular = input("CELULAR: ")
    dictAlumno = {
        'nombre':nombre,
        'email':email,
        'celular':celular
    }
    alumnos.append(dictAlumno)
    print("ALUMNO REGISTRADO CON EXITO!!!")
    
def mostrarAlumnos(alumnos):
    #MOSTRAR ALUMNOS
    print("============================================")
    print("              RELACION DE ALUMNOS     ")
    print("============================================")
    if(len(alumnos) > 0):
        cabeceras = alumnos[0].keys()
        registros = [x.values() for x in alumnos]
        print(tabulate.tabulate(registros,cabeceras))
    else:
        print("NO EXISTEN REGISTROS")
    print("============================================")
    
def buscarAlumno(valorBusqueda,alumnos):
    posAlumno = -1
    for i in range(len(alumnos)):
            dictAlumnoBusqueda = alumnos[i]
            for clave,valor in dictAlumnoBusqueda.items():
                if (valor == valorBusqueda):
                    posAlumno = i
                    break
                if(posAlumno >= 0):
                  break
    return posAlumno

def actualizarAlumno(posAlumno,alumnos):
    nombre = input("INGRESE NUEVO NOMBRE : ")
    email = input("INGRES NUEVO EMAIL: ")
    celular = input("INGRESE NUEVO CELULAR: ")
    dictAlumnoActualizar = {
        'nombre':nombre,
        'email':email,
        'celular':celular
    }
    alumnos[posAlumno] = dictAlumnoActualizar
    print("ALUMNO ACTUALIZADO!!!")
        
def eliminarAlumno(posAlumno,alumnos):
    alumnos.pop(posAlumno)
    print("ALUMNO ELIMINADO!!!")