#f = open('alumnos.txt','a')
#f.write('\ncesar mayta')

f = open('alumnos.txt','r')
alumnos = f.read()
lstResultado = []

lstAlumnos = alumnos.splitlines()
print(lstAlumnos)
for dictAlumno in lstAlumnos:
    lstdictAlumno = dictAlumno.split(',')
    print(lstdictAlumno)
    dictAlumno = {
        'nombre':lstdictAlumno[0],
        'email':lstdictAlumno[1],
        'celular':lstdictAlumno[2]
    }
    lstResultado.append(dictAlumno)
print(lstResultado)
f.close