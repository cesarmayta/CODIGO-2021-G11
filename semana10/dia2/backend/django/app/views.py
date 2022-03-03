from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Cliente
from django.contrib.auth.models import User

from .serializers import UsuarioSerializer,ClienteRegistroSerializer,UsuarioLoginSerializer

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny,IsAuthenticated

class indexView(APIView):
    def get(self,request):
        context = {
            'status':True,
            'content':'API ACTIVO'
        }
        return Response(context)
    
################## ENDPOINTS PARA JWT ####################
class UsuarioLoginView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = UsuarioLoginSerializer
    

################## ENDPOINTS PARA USUARIOS ################
class UsuarioView(APIView):
    def get(self,request):
        usuarioData = User.objects.all()
        usuarioSer = UsuarioSerializer(usuarioData,many=True)
        context = {
            'status':True,
            'content':usuarioSer.data
        }
        return Response(context)
    
    def post(self,request):
        usuarioSer = UsuarioSerializer(data=request.data)
        usuarioSer.is_valid(raise_exception=True)
        usuarioSer.save()
        
        context = {
            'ok':True,
            'content':usuarioSer.data
        }
        return Response(context)
    
############## ENDPOINST DE CLIENTES #######################
class ClienteRegistroView(APIView):
    
    def post(self,request):
        clienteSer = ClienteRegistroSerializer(data=request.data)
        clienteSer.is_valid(raise_exception=True)
        clienteSer.save()
        
        context = {
            'status':True,
            'content':'cliente registrado'
        }
        return Response(context)