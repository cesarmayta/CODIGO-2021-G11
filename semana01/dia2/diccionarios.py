capitales = {'Perú':'Lima',
             'Ecuador':'Quito',
             'Chile':'Santiago',
             'Uruguay':'Montevideo'}

print(capitales)
capital = {'Brasil':'Brasilia'}
capitales.update(capital)
print(capitales)
c = capitales.pop('Bolivia','NO EXISTE EL PAIS')
print(c)
capitales2 = capitales.copy()
print(capitales2)

for capital in capitales:
    print(capital," : ",capitales[capital])
    
print(capitales.keys())
print(capitales.values())
for clave in capitales.keys():
    print(clave," => ",capitales[clave])
    
for clave,valor in capitales.items():
    print(clave," -- ",valor)

