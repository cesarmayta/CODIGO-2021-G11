from flask import Flask,render_template,request

app = Flask(__name__)

lstProductos = ['LAPTOP','IMPRESORA','PARLANTES']

@app.route('/')
def index():
    #return 'HOLA MUNDO FLASK'
    nombre = request.args.get('nombre','no hay nombre')
    
    context = {
        'nombre':nombre,
        'productos':lstProductos
    }
    
    return render_template('index.html',**context)

@app.route('/portafolio')
def portafolio():
    return render_template('portafolio.html')



if __name__ == '__main__':
    app.run(debug=True,port=5000)