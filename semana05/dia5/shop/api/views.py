from rest_framework.views import APIView
from rest_framework.response import Response
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
