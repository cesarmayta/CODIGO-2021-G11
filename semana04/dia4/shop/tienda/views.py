from django.shortcuts import render

from .models import Categoria,Producto

from tienda.carrito import Cart


# Create your views here.
def index(request):
    listaProductos = Producto.objects.all()
    listaCategorias = Categoria.objects.all()
    context = {
        'productos': listaProductos,
        'categorias': listaCategorias
    }
    return render(request,'index.html',context)

def productosPorCategoria(request,categoria_id):
    objCategoria = Categoria.objects.get(pk=categoria_id)
    listaCategorias = Categoria.objects.all()
    listaProductos = objCategoria.producto_set.all()
    context = {
        'productos':listaProductos,
        'categorias':listaCategorias
    }
    return render(request,'index.html',context)

def producto(request,producto_id):
    objProducto = Producto.objects.get(pk=producto_id)
    context = {
        'producto':objProducto
    }
    return render(request,'producto.html',context)

def carrito(request):
    return render(request,'carrito.html')

def agregarCarrito(request,producto_id):
    objProducto = Producto.objects.get(id=producto_id)
    carritoProducto = Cart(request)
    carritoProducto.add(objProducto,1)
    print(request.session.get("cart"))
    return render(request,'carrito.html')

def eliminarProductoCarrito(request,producto_id):
    objProducto = Producto.objects.get(id=producto_id)
    carritoProducto = Cart(request)
    carritoProducto.remove(objProducto)
    return render(request,'carrito.html')

def limpiarCarrito(request):
    carritoProducto = Cart(request)
    carritoProducto.clear()
    return render(request,'carrito.html')