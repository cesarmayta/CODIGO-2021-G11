from django.shortcuts import render,redirect
from django.contrib.auth import login,logout,authenticate

from .models import Categoria,Producto,Cliente
from django.contrib.auth.models import User

from tienda.carrito import Cart
from tienda.forms import ClienteForm


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

########## VISTAS PARA LOGIN Y REGISTRO DE USUARIOS

def loginUsuario(request):
    context = {}
    if request.method == 'POST':
        #LOGIN DE USUARIOS
        dataUsuario = request.POST['usuario']
        dataPassword = request.POST['password']
        
        usuarioAuth = authenticate(request,username=dataUsuario,password=dataPassword)
        if usuarioAuth is not None:
            login(request,usuarioAuth)
            return redirect('/cuenta')
        else:
            context = {
                'error':'datos incorrectos'
            }
    return render(request,'login.html',context)

def cuentaUsuario(request):
    try:
        clienteEditar = Cliente.objects.get(usuario = request.user)
        dataCliente = {'nombre':request.user.first_name,
                    'apellidos':request.user.last_name,
                    'email':request.user.email,
                    'direccion':clienteEditar.direccion,
                    'telefono':clienteEditar.telefono,
                    'usuario':request.user.username}
    except:
        dataCliente = {'nombre':request.user.first_name,
                    'apellidos':request.user.last_name,
                    'email':request.user.email,
                    'usuario':request.user.username}
    
    frmCliente = ClienteForm(dataCliente)
    
    context = {
        'frmCliente':frmCliente
    }
    return render(request,'cuenta.html',context)

def crearUsuario(request):
    if request.method == 'POST':
        dataUsuario = request.POST['nuevoUsuario']
        dataPassword = request.POST['nuevoPassword']
        
        nuevoUsuario = User.objects.create_user(username=dataUsuario,password=dataPassword)
        login(request,nuevoUsuario)
        return redirect('/cuenta')


###################################################