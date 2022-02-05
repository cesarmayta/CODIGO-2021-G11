from django.urls import path

from . import views

urlpatterns = [
    path('',views.indexView.as_view()),
    path('bookmark',views.BookmarkView.as_view()),
    path('publicbookmark',views.PublicBookmarkView.as_view()),
    path('bookmark/<int:bookmark_id>',views.BookmarkDetailView.as_view())
]