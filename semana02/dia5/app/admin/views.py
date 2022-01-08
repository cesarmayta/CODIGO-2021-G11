#importamos render_template para renderizar plantillas de jinja2
from flask import render_template

#importamos el init de admin
from . import admin

#importamos los formularios
from app.forms import LoginForm


@admin.route('/login')
def login():
    login_form = LoginForm()
    context = {
        'login_form':login_form
    }
    return render_template('login.html',**context)
