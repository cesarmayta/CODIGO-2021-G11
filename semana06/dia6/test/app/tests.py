from django.test import TestCase

# Create your tests here.
from .models import Bookmark
from django.contrib.auth.models import User

from django.utils import timezone
import datetime



class BookmarkModelTests(TestCase):
    
    def test_create_bookmark(self):
        """ test para validar la creación de un bookmark"""
        user1 = User.objects.create_user(username='admin',password='admin')
        bk = Bookmark()
        bk.title = "GOOGLE"
        bk.url = "http://www.google.com"
        bk.access = "public"
        #bk.create_at = timezone.now() + datetime.timedelta(days=10)
        bk.user = user1
        bk.save()
        
        self.assertEqual(bk.title,"GOOGLE")
        self.assertEqual(bk.create_at,timezone.now())

from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse
     
class BookmarkAPIViewTests(APITestCase):
    
    def test_bookmark_post(self):
        """ prueba de registro de un nuevo bookmark enviado por metodo post """
        user1 = User.objects.create_user(username='admin',password='admin')
        url = reverse('app:bookmark')
        data = {
            'title':'nuevo bookmark',
            'url':'http://www.google.com',
            'access':'public',
            'user':'1'
        }
        
        response = self.client.post(url,data,format='json')
        self.assertEqual(response.status_code,200)
        self.assertEqual(Bookmark.objects.count(),1)
        self.assertEqual(Bookmark.objects.get().title,'nuevo bookmark')