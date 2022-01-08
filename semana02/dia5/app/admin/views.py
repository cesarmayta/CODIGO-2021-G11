#importamos render_template para renderizar plantillas de jinja2
from flask import render_template,flash,redirect,url_for,session

#importamos el init de admin
from . import admin

#importamos los formularios
from app.forms import LoginForm

########### FIREBASE ###############

import pyrebase

config = {
  "apiKey": "AIzaSyBnR1fKJvlqfcrKFAMQOKn6nPru7-2cm_Y",
  "authDomain": "portafolio-80f60.firebaseapp.com",
  "databaseURL": "https://portafolio-80f60-default-rtdb.firebaseio.com",
  "projectId": "portafolio-80f60",
  "storageBucket": "portafolio-80f60.appspot.com",
  "messagingSenderId": "180035497662",
  "appId": "1:180035497662:web:5774ca5a911599db1cb8ef",
  "measurementId": "G-4CBM3K6ZM6"
}
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
#####################################


@admin.route('/login',methods=['GET','POST'])
def login():
    login_form = LoginForm()
    context = {
        'login_form':login_form
    }
    #CODIGO PARA REALIZAR EL LOGIN DE USUARIOS
    if login_form.validate_on_submit():
        #CAPTURAMOS VALORES DE USUARIO Y PASSWORD
        usuarioData = login_form.usuario.data
        passwordData = login_form.password.data
        print("DATOS DE LOGIN :")
        print("usuario : " + usuarioData)
        print("password: " + passwordData)
        
        #REALIZAMOS EL LOGIN DE USUARIO CON FIREBASE
        try:
            usuario = auth.sign_in_with_email_and_password(usuarioData,passwordData)
            session['token'] = usuario['idToken']
            return redirect(url_for('admin.proyectos'))
            #flash(auth.get_account_info(usuario['idToken']))
        except:
            flash("usuario o password invalidos")
    
    return render_template('admin/login.html',**context)

@admin.route('/proyectos')
def proyectos():
    if('token' in session):
        return render_template('admin/proyectos.html')
    else:
        return redirect(url_for('admin.login'))
    
@admin.route('/logout')
def logout():
    session.pop('token')
    return redirect(url_for('admin.login'))