from django.contrib import admin

from django.contrib.auth.models import User

# Register your models here.
from .models import Cliente

#admin.site.register(Cliente)
@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('dni','usuario','direccion')