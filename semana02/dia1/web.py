#primera aplicación web con python y Flask
from flask import Flask,request

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>BIENVENIDO A MI PAGINA WEB CON FLASK</h1>'

@app.route('/saludo')
def saludo():
    nombre = request.args.get('nombre','no hay nombre')
    return 'Hola {}'.format(nombre)

@app.route('/suma')
def suma():
    n1 = request.args.get('n1','0')
    n2 = request.args.get('n2','0')
    resultado = int(n1) + int(n2)
    return '<center><b>la suma de {} + {} es {}</b></center>'.format(n1,n2,resultado)

@app.route('/resta/<int:n1>/<int:n2>')
def resta(n1=0,n2=0):
    resultado = n1 - n2
    return '<center><b>la resta de {} - {} es {}</b></center>'.format(n1,n2,resultado)

@app.route('/calculadora',methods=['GET','POST'])
def calculadora():
    form = "<form action='calculadora' method='POST'>"
    form += "<input type='text' name='n1' size='2'/> + <input type='text' name='n2' size='2'/>"
    form += " <input type='submit' value='=' />"
    form += "</form>"
    
    if request.method == 'POST':
        n1 = request.form['n1']
        n2 = request.form['n2']
        resultado = int(n1) + int(n2)
        form += '<h2>la suma es {}</h2>'.format(resultado)
    
    return form



app.run(debug = True)