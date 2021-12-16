#PROGRAMA PARA CRUD DE ALUMNOS
from libAlumnos import *
from sistema.libCursos import *
#ENTRADA
opcion = 0
alumnos = [{'nombre':'cesar mayta','email':'cesarmayta@gmail.com','celular':'956290589'}]

print("================================")
print("   PROGRAMA DE ALUMNOS CODIGO   ")
print("================================")
mostrarCurso()
while(opcion != 5):
    menu()
    opcion = int(input("INGRESE OPCIÓN :"))
    if(opcion == 1):
        registrarAlumno(alumnos)
    elif(opcion == 2):
        mostrarAlumnos(alumnos)
    elif(opcion == 3):
        #ACTUALIZAR ALUMNO
        print("==================================")
        print("    ACTUALIZAR ALUMNO     ")
        print("==================================")
        emailBusqueda = input("Ingrese el email del alumno a actualizar : ")

        posAlumno = buscarAlumno(emailBusqueda,alumnos)
        
        print("EL ALUMNO ESTA EN LA POSICIÓN :",posAlumno)
        
        actualizarAlumno(posAlumno,alumnos)
        
    elif(opcion == 4):
        #ELIMINAR ALUMNO
        print("==================================")
        print("    ELIMINAR ALUMNO    ")
        print("==================================")
        emailBusqueda = input("Ingrese el email del alumno a actualizar : ")
        posAlumno = buscarAlumno(emailBusqueda,alumnos)
        eliminarAlumno(posAlumno,alumnos)
    elif(opcion == 5):
        #SALIR DEL PROGRAMA
        print("==================================")
        print("    GRACIAS POR USAR MI PROGRAMA   ")
        print("==================================")
    else:
        #OPCION INCORRECTA
        print("==================================")
        print("    LA OPCIÓN NO ES CORRECTA   ")
        print("==================================")
        
