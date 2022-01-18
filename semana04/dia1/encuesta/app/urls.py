from django.urls import path

from . import views

app_name = 'app'

urlpatterns = [
    path('',views.index,name='index'),
    path('preguntas',views.preguntas,name='preguntas'),
    path('enviar',views.enviar,name='enviar')
]