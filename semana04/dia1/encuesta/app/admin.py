from django.contrib import admin

# Register your models here.
from .models import Pregunta,Opcion

admin.site.register(Pregunta)
admin.site.register(Opcion)