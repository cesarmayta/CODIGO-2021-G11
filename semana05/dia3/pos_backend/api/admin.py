from django.contrib import admin

# Register your models here.
from .models import *
admin.site.register(Categoria)
admin.site.register(Plato)
admin.site.register(Mesa)