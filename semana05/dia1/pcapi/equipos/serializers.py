from rest_framework import serializers

from .models import Empleado,Equipo

class EmpleadoSerializer(serializers.Serializer):
    nombre = serializers.CharField()
    email = serializers.EmailField()
    
    def create(self,validated_data):
        return Empleado.objects.create(**validated_data)
    
class EquipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipo
        fields = '__all__'