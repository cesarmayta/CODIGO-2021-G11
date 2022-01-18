from django.shortcuts import render

from .models import Pregunta,Opcion

# Create your views here.
def preguntas(request):
    listaPreguntas = Pregunta.objects.all()
    context = {
        'preguntas':listaPreguntas
    }
    
    return render(request,'preguntas.html',context)

def index(request):
    titulo = 'ENCUESTA A ALUMNOS DE CODIGO'
    context = {
        'titulo':titulo
    }
    return render(request,'index.html',context)

def enviar(request):
    context = {
        'titulo':'RESPUESTA',
        'nombre': request.POST['nombre'],
        'rol': request.POST['rol'],
        'idiomas': request.POST.getlist('idiomas')
    }
    
    return render(request,'respuesta.html',context)