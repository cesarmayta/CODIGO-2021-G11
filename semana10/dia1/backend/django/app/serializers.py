from rest_framework import serializers

from .models import Cliente
from django.contrib.auth.models import User

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','password','email','first_name','last_name')
        extra_kwargs = {'password':{'write_only':True}}
        
    def create(self,validated_data):
        nuevoUsuario = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        
        nuevoUsuario.set_password(validated_data['password'])
        nuevoUsuario.save()
        
        return nuevoUsuario
    
class ClienteRegistroSerializer(serializers.ModelSerializer):
    dni = serializers.CharField(max_length=8)
    direccion = serializers.CharField()
    
    class Meta:
        model = User
        fields = ('username','password','email','first_name','last_name','dni','direccion')
        extra_kwargs = {'password':{'write_only':True}}
        
    def create(self,validated_data):
        nuevoUsuario = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        
        nuevoUsuario.set_password(validated_data['password'])
        nuevoUsuario.save()
        #registramos el cliente
        cliente = Cliente.objects.create(
            usuario=nuevoUsuario,
            dni=validated_data['dni'],
            direccion=validated_data['direccion']
        )
        
        dicClienteReturn = {
            'cliente_id':cliente.id
        }
        
        return dicClienteReturn