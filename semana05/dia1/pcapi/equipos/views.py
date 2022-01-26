from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Empleado

@api_view(['GET'])
def index(request):
    data = {'mensaje':'Hola Mundo json'}
    return Response(data)

@api_view(['GET'])
def empleados(request):
    listaEmpleados = Empleado.objects.all()
    print(listaEmpleados)
    dataEmpleados = []
    for d in listaEmpleados:
        dataEmpleados.append({
            'nombre':d.nombre,
            'email':d.email
        })
    
    return Response({'status':'OK','data':dataEmpleados})

@api_view(['POST'])
def crearEmpleado(request):
    nuevoEmpleado = Empleado()
    nuevoEmpleado.nombre = request.data['nombre']
    nuevoEmpleado.email = request.data['email']
    nuevoEmpleado.save()
    
    dataNuevoEmpleado = {
        'id':nuevoEmpleado.id,
        'nombre':nuevoEmpleado.nombre,
        'email':nuevoEmpleado.email
    }
    return Response({'status':'OK',
                     'data':dataNuevoEmpleado})
    
