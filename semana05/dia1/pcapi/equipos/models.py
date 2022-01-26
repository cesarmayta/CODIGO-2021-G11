from django.db import models

# Create your models here.
class Empleado(models.Model):
    nombre = models.CharField(max_length=200,default='')
    email = models.EmailField()
    
    def __str__(self):
        return self.nombre
    
class Equipo(models.Model):
    marca = models.CharField(max_length=200)
    serie = models.CharField(max_length=200)
    modelo = models.CharField(max_length=200)
    procesador = models.CharField(max_length=200)
    memoria = models.IntegerField()
    disco = models.DecimalField(max_digits=10,decimal_places=2)
    
    def __str__(self):
        return self.marca
        