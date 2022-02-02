from rest_framework.views import APIView
from rest_framework.response import Response
from tienda.models import *
from .serializers import *

class IndexView(APIView):
    
    def get(self,request):
        context = {'ok':True,
                   'message':'el servidor está activo!'
                   }
        return Response(context)
    
class CategoriaView(APIView):
    
    def get(self,request):
        dataCategoria = Categoria.objects.all()
        serCategoria = CategoriaSerializer(dataCategoria,many=True)
        return Response({'ok':True,
                        'content':serCategoria.data})
        
class ProductoView(APIView):
    
    def get(self,request):
        dataProducto = Producto.objects.all()
        serProducto = ProductoSerializer(dataProducto,many=True)
        return Response({'ok':True,
                         'content':serProducto.data})
        
class ClienteView(APIView):
    
    def get(self,request):
        dataCliente = Cliente.objects.all()
        serCliente = ClienteSerializer(dataCliente,many=True)
        return Response({'ok':True,
                         'content':serCliente.data})
