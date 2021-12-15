#REALIZAR UN PROGRAMA QUE TE PIDA INGRESAR UNA CANTIDAD DE NUMEROS
#EL PROGRAMA DEBE PEDIRTE CUANTOS NUMEROS INGRESAR
# AL FINAL DEBE MOSTRAR EL NUMERO MAYOR,MENOR,Y EL PROMEDIO
#Y DEBE MOSTRAR TODOS LOS NUMEROS ORDENADOS EN UN TUPLA
#ENTRADA
valores = []
n = int(input("Ingrese cantidad de valores a evaluar : "))
for i in range(n):
    valor = int(input("Ingrese valor " + str(i + 1) + ": "))
    valores.append(valor)
#PROCESO
maximo = max(valores)
minimo = min(valores)
promedio = sum(valores)/len(valores)
valoresOrdenados = sorted(valores)
tuplaValores = tuple(valoresOrdenados)

#SALIDA
print("VALORES  : ",tuplaValores)
print("MAXIMO   : ",maximo)
print("MINIMO   : ",minimo)
print("PROMEDIO : ",promedio)