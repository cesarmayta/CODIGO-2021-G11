from django.urls import path

from . import views

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('categoria',views.CategoriaView.as_view(),name='categoria'),
    path('mesa',views.MesaView.as_view(),name='mesa'),
    path('categoria/<int:categoria_id>/platos',views.CategoriaPlatosView.as_view(),name='categoriaplato'),
    path('pedido',views.PedidoView.as_view(),name='pedido'),
    path('plato',views.PlatoView.as_view(),name='plato')
]