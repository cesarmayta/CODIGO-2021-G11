from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
from .models import *
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
        
class MesaView(APIView):
    
    def get(self,request):
        dataMesa = Mesa.objects.all()
        serMesa = MesaSerializer(dataMesa,many=True)
        context = {
            'ok':True,
            'content': serMesa.data
        }
        return Response(context)
    
class CategoriaPlatosView(APIView):
    
    def get(self,request,categoria_id):
        dataCategoria = Categoria.objects.get(pk=categoria_id)
        serCategoria = CategoriaPlatosSerializer(dataCategoria)
        context = {
            'ok':True,
            'content':serCategoria.data
        }
        return Response(context)