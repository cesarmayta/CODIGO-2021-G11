from flask_wtf import FlaskForm
from wtforms.fields import StringField,PasswordField,SubmitField,TextAreaField
from wtforms.validators import DataRequired

class LoginForm(FlaskForm):
    usuario = StringField('Usuario',validators=[DataRequired()])
    password = PasswordField('Password',validators=[DataRequired()])
    submit = SubmitField('Login')
    
class ProyectoForm(FlaskForm):
    nombre = StringField('Nombre',validators=[DataRequired()])
    descripcion = StringField('Descripción',validators=[DataRequired()])
    url = StringField('URL',validators=[DataRequired()])
    submit = SubmitField('GUARDAR')