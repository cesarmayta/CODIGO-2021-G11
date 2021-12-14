import locale
locale.setlocale(locale.LC_ALL,'')
cambioDolar = [4.070,4.077,4.065,4.056]
#PROGRAMA PARA CONVERTIR MONEDAS
#DATOS DE ENTRADA
tipocambio = 0
while(tipocambio == 0):
    monedaInicial = input("Ingrese moneda a convertir(dolares,euros):")
    if(monedaInicial == "dolares"):
        montoInicial = float(input("Ingrese monto en "+ monedaInicial + ": "))
        montoInicialFormato = "$ {:,.2f}".format(montoInicial)
        tipocambio = 4.067
    elif(monedaInicial == "euros"):
        montoInicial = float(input("Ingrese monto en "+ monedaInicial + ": "))
        montoInicialFormato = "€ {:,.2f}".format(montoInicial)
        tipocambio = 4.886
    else:
        print("No selecciono una moneda valida")
#PROCESO
montoFinal = float(montoInicial) * tipocambio
#DATOS DE SALIDA
print("El monto de "+ montoInicialFormato + " es igual al dia de hoy a" + str(locale.currency(montoFinal)))
print("===== TIPO DE CAMBIO DE LOS ULTIMOS 4 DIAS ===")
for c in cambioDolar:
    print("a tipo de cambio : " + str(c) + " el monto es : " + str(montoInicial * c)) 