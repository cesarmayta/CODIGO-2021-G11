from django.urls import path

from . import views

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('categoria',views.CategoriaView.as_view(),name='categoria')
]