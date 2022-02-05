from rest_framework.views import APIView
from rest_framework.response import Response

from .models import *
from .serializers import *

from rest_framework.permissions import IsAuthenticated

class indexView(APIView):
    
    def get(self,request):
        context = {
            'ok':True,
            'content':'Server is running'
        }
        return Response(context)

class PublicBookmarkView(APIView):
    
    
    def get(self,request):
        BookmarkData = Bookmark.objects.filter(access='public')
        BookmarkSer = BookmarkSerializer(BookmarkData,many=True)
        context = {
            'ok':True,
            'content':BookmarkSer.data
        }
        return Response(context)

class BookmarkView(APIView):
    
    permission_classes = [IsAuthenticated]
    
    def get(self,request):
        BookmarkData = Bookmark.objects.all()
        BookmarkSer = BookmarkSerializer(BookmarkData,many=True)
        context = {
            'ok':True,
            'content':BookmarkSer.data
        }
        return Response(context)
    
    def post(self,request):
        BookmarkSer = BookmarkSerializer(data=request.data)
        BookmarkSer.is_valid(raise_exception=True)
        BookmarkSer.save()
        
        context = {
            'ok':True,
            'content':BookmarkSer.data
        }
        return Response(context)
    
class BookmarkDetailView(APIView):
    
    permission_classes = [IsAuthenticated]
    
    def get(self,request,bookmark_id):
        BookmarkData = Bookmark.objects.get(pk=bookmark_id)
        BookmarkSer = BookmarkSerializer(BookmarkData)
        context = {
            'ok':True,
            'content':BookmarkSer.data
        }
        return Response(context)
    
    def put(self,request,bookmark_id):
        BookmarkData = Bookmark.objects.get(pk=bookmark_id)
        BookmarkSer = BookmarkSerializer(BookmarkData,data=request.data)
        BookmarkSer.is_valid(raise_exception=True)
        BookmarkSer.save()
        context = {
            'ok':True,
            'content':BookmarkSer.data
        }
        return Response(context)
    
    def delete(self,request,bookmark_id):
        BookmarkData = Bookmark.objects.get(pk=bookmark_id)
        BookmarkSer = BookmarkSerializer(BookmarkData)
        BookmarkData.delete()
        context = {
            'ok':True,
            'content':BookmarkSer.data
        }
        return Response(context)