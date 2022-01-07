#importamos la clase Blueprint que nos permitira registrar nuestro modulo al proyecto principal
from flask import Blueprint

admin = Blueprint('admin',__name__,url_prefix='/admin')

from . import views

