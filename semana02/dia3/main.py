from flask import Flask,render_template


import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("firebasetoken.json")
firebase_admin.initialize_app(cred)
db = firestore.client()


app = Flask(__name__)

@app.route('/')
def home():
    context = {
        'nombre':'César Mayta',
        'imagen':'https://firebasestorage.googleapis.com/v0/b/portafolio-80f60.appspot.com/o/perfil2022.jpg?alt=media&token=89b163b5-beef-42e0-b1b4-9689c2dec9d5',
        'bio':'FullStack Developer'
    }
    return render_template('home.html',**context)

@app.route('/portafolio')
def portafolio():
    colProyectos = db.collection('proyectos')
    docProyectos = colProyectos.get()
    
    #print(docProyectos)
    lstProyectos = []
    for doc in docProyectos:
        print(doc.to_dict())
        dicProyecto = doc.to_dict()
        lstProyectos.append(dicProyecto)
        
    context = {
        'proyectos':lstProyectos
    }
        

    return render_template('portafolio.html',**context)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True,port=5000)