from flask import Flask,render_template
from flask_mysqldb import MySQL


app = Flask(__name__)

#CONFIGURAR CONEXIÓN CON BASE DE DATOS
app.config['MYSQL_HOST'] = 'btcb8knq37mi7aulkk2j-mysql.services.clever-cloud.com'
app.config['MYSQL_USER'] = 'ujslqzcjfuqqcd8u'
app.config['MYSQL_PASSWORD'] = 'elSv2jqDW6UqqLkuXaeM'
app.config['MYSQL_DB'] = 'btcb8knq37mi7aulkk2j'

mysql = MySQL(app)

@app.route('/')
def index():
    cursor = mysql.connection.cursor()
    cursor.execute('select id,sistema,procesador,memoria from computadoras')
    data = cursor.fetchall()
    cursor.close()
    
    print(data)
    
    context = {
        'data':data
    }
    
    return render_template('index.html',**context)

app.run(debug=True,port=4000)