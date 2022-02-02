from django.urls import path

from . import views

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('categoria',views.CategoriaView.as_view(),name='categoria'),
    path('producto',views.ProductoView.as_view(),name='producto'),
    path('cliente',views.ClienteView.as_view(),name='cliente')
]