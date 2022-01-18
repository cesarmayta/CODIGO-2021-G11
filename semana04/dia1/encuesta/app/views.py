from django.shortcuts import render

# Create your views here.
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