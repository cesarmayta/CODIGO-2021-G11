#PROGRAMA PARA CRUD DE ALUMNOS
from libAlumnos import *
import os
#ENTRADA
opcion = 0
alumnos = []

if(os.path.isfile('alumnos.csv')):
    f = open('alumnos.csv','r')
    strAlumnos = f.read()
    alumnos = cargarAlumnos(strAlumnos)
    f.close()

print("================================")
print("   PROGRAMA DE ALUMNOS CODIGO   ")
print("================================")
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
        strAlumnos = grabarAlumnos(alumnos)
        fw = open('alumnos.csv','w')
        fw.write(strAlumnos)
        fw.close()
    else:
        #OPCION INCORRECTA
        print("==================================")
        print("    LA OPCIÓN NO ES CORRECTA   ")
        print("==================================")
        
