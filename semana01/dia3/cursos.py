import os
nombre = input("NOMBRE CURSO: ")
profesor = input("PROFESOR : ")
if os.path.exists('cursos.csv') == False :
    f = open('cursos.csv','w')
    f.write(nombre + ";" + profesor)
else:
    f = open('cursos.csv','a')
    f.write('\n' + nombre + ";" + profesor)
f.close()

fr = open('cursos.csv','r')
cursos = fr.read()
listaCursos = cursos.splitlines()
print(listaCursos)
listaResultado = []
for l in listaCursos:
    listaCurso = l.split(';')
    print(listaCurso)
    dictCurso = {
        'nombre':listaCurso[0],
        'profesor':listaCurso[1]
    }
    listaResultado.append(dictCurso)
fr.close()
print(listaResultado)