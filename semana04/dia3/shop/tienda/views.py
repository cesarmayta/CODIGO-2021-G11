from django.shortcuts import render

from .models import Categoria,Producto

# Create your views here.
def index(request):
    listaProductos = Producto.objects.all()
    listaCategorias = Categoria.objects.all()
    context = {
        'productos': listaProductos,
        'categorias': listaCategorias
    }
    return render(request,'index.html',context)