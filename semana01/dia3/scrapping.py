#EJEMPLO DE WEB SCRAPPING CON PYTHON
import requests
from bs4 import BeautifulSoup

url = requests.get("https://www.sbs.gob.pe/app/pp/sistip_portal/paginas/publicacion/tipocambiopromedio.aspx")
lstTipoCambio = []
if(url.status_code == 200):
    html = BeautifulSoup(url.text,"html.parser")
    #tabla = html.find_all('table',{'id':'ctl00_cphContent_rgTipoCambio_ctl00'})
    for i in range(6):
        filas = html.find_all('tr',{'id':'ctl00_cphContent_rgTipoCambio_ctl00__'+str(i + 1)})
        for fila  in filas:
            moneda = fila.find('td',{'class':'APLI_fila3'})
            compra = fila.find('td',{'class':'APLI_fila2'})
            venta = fila.find('td',{'class':'APLI_fila2'}).findNext('td')
            dicTipoCambio = {
                'moneda':moneda.get_text(),
                'compra':compra.get_text(),
                'venta':venta.get_text()
            }
            lstTipoCambio.append(dicTipoCambio)
    print(lstTipoCambio)
else:
    print("error al abrir la pagina" + str(url.status_code))