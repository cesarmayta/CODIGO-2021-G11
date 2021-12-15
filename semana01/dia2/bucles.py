#tabla de multiplicar
n = int(input("ingresa al tabla de multiplicar que desea"))
i = 1
while i <= 12:
    x =  n * i
    print(str(n) + " x " + str(i) + " = " + str(x))
    i = i + 1
    
i = 1
for i in range(13):
    x = n * i
    print(n," x ",i," = ",x)