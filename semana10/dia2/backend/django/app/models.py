from django.db import models

from django.contrib.auth.models import User

# Create your models here.
class Cliente(models.Model):
    usuario = models.OneToOneField(User,on_delete=models.RESTRICT)
    dni = models.CharField(max_length=8)
    direccion = models.TextField()
    
    def __str__(self):
        return self.dni