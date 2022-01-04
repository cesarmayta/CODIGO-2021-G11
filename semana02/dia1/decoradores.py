def decorador(func):
    def envoltura():
        print('eso se añade a mi funcion original')
        func()
    return envoltura

def mayusculas(func):
    def envoltura(texto):
        return func(texto).upper()
    return envoltura

#@decorador
#def saludo():
#    print('HOLA MUNDO')
    
#saludo = decorador(saludo)
#saludo()
@mayusculas
def mensaje(nombre):
    return 'hola ' + nombre

#mensaje = mayusculas(mensaje)

print(mensaje('cesar'))
