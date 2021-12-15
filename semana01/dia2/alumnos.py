#PROGRAMA PARA CRUD DE ALUMNOS
import tabulate
#ENTRADA
opcion = 0
alumnos = [{'nombre':'cesar mayta','email':'cesarmayta@gmail.com','celular':'956290589'}]

print("================================")
print("   PROGRAMA DE ALUMNOS CODIGO   ")
print("================================")
print("MARQUE LA OPCIÓN QUE DESEA EJECUTAR")
print("[1] REGISTRAR ALUMNO")
print("[2] MOSTRAR ALUMNOS")
print("[3] ACTUALIZAR ALUMNO")
print("[4] ELIMINAR ALUMNO")
print("[5] SALIR DEL PROGRAMA")
while(opcion != 5):
    opcion = int(input("INGRESE OPCIÓN :"))
    if(opcion == 1):
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
    elif(opcion == 2):
        #MOSTRAR ALUMNOS
        print("============================================")
        print("              RELACION DE ALUMNOS     ")
        print("============================================")
        cabeceras = alumnos[0].keys()
        registros = [x.values() for x in alumnos]
        print(tabulate.tabulate(registros,cabeceras))
        print("============================================")
    elif(opcion == 3):
        #ACTUALIZAR ALUMNO
        print("==================================")
        print("    ACTUALIZAR ALUMNO     ")
        print("==================================")
        emailBusqueda = input("Ingrese el email del alumno a actualizar : ")
        posAlumno = -1
        for i in range(len(alumnos)):
            dictAlumnoBusqueda = alumnos[i]
            for clave,valor in dictAlumnoBusqueda.items():
                if (valor == emailBusqueda):
                    posAlumno = i
                    break
        
        print("EL ALUMNO ESTA EN LA POSICIÓN :",posAlumno)
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
            
    elif(opcion == 4):
        #ELIMINAR ALUMNO
        print("==================================")
        print("    ELIMINAR ALUMNO    ")
        print("==================================")
        emailBusqueda = input("Ingrese el email del alumno a actualizar : ")
        posAlumno = -1
        for i in range(len(alumnos)):
            dictAlumnoBusqueda = alumnos[i]
            for clave,valor in dictAlumnoBusqueda.items():
                if (valor == emailBusqueda):
                    posAlumno = i
                    break
        alumnos.pop(posAlumno)
        print("ALUMNO ELIMINADO!!!")
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