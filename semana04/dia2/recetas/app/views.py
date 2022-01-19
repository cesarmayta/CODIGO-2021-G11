from django.shortcuts import render,redirect

from .models import Receta,Comentario,Autor

# Create your views here.
def index(request):
    listaRecetas = Receta.objects.all()
    context = {
        'recetas':listaRecetas
    }
    return render(request,'index.html',context)

def agregarReceta(request):
    receta = Receta()
    receta.titulo = request.POST['titulo']
    receta.ingredientes = request.POST['ingredientes']
    receta.preparacion = request.POST['preparacion']
    
    autorId = request.POST['autor']
    autor = Autor.objects.get(pk=autorId)
    
    receta.autor = autor
    receta.save()
    
    return redirect('/')
    