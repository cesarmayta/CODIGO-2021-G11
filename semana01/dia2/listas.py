dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
primos = [2,3,5,7,11,13]
fecha = ["martes",14,"diciembre",2021]

print(dias[3:6])
print(dias[0])
print(len(dias))
print(primos)
primos.append(17)
print(primos)
primos.pop()
print(primos)
dias[0] = "ninguno"
print(dias)

for dia in dias:
    print("dia : " + dia)
    
for dia in range(len(dias)):
    print(dias[dia])
    
for p in range(len(dias)):
    if(dias[p] == "miercoles"):
        resultado = p

print(resultado)
dias[resultado] == "esdiamiercoles"