#importamos el framework Flask
from flask import Flask
#importamos flask bootstrap para integrarlo con flask
from flask_bootstrap import Bootstrap

#IMPORTAMOS LOS BLUEPRINTS
from .admin import admin

#IMPORTAMOS CONFIGURACIONES
from .config import Config

#función para crear la app de flask
def create_app():
    app = Flask(__name__)
    
    #agregamos bootstrap a mi app
    bootstrap = Bootstrap(app)
    
    app.config.from_object(Config)
    
    #registramos los blueprints
    app.register_blueprint(admin)
    
    return app