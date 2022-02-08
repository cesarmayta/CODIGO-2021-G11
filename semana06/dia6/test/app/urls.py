from django.urls import path

from . import views

app_name = 'app'

urlpatterns = [
    path('',views.indexView.as_view()),
    path('bookmark',views.BookmarkView.as_view(),name='bookmark'),
    path('publicbookmark',views.PublicBookmarkView.as_view()),
    path('bookmark/<int:bookmark_id>',views.BookmarkDetailView.as_view())
]