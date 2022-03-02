from django.urls import path

from . import views

app_name='app'

urlpatterns= [
    path('',views.indexView.as_view()),
    path('usuario',views.UsuarioView.as_view()),
    path('registro',views.ClienteRegistroView.as_view())
]