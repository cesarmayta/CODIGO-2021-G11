from django.urls import path

from . import views

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.views import TokenVerifyView

app_name='app'

urlpatterns= [
    path('',views.indexView.as_view()),
    path('usuario',views.UsuarioView.as_view()),
    path('registro',views.ClienteRegistroView.as_view()),
    path('login',views.UsuarioLoginView.as_view()),
    path('loginsimplejwt',TokenObtainPairView.as_view()),
    path('login/refresh',TokenRefreshView.as_view()),
    path('verificar',TokenVerifyView.as_view())
]