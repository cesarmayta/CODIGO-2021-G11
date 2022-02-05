from django.db import models

from django.contrib.auth.models import User

from datetime import datetime
from django.utils import timezone

# Create your models here.
class Bookmark(models.Model):
    PRIVATE ='private'
    PUBLIC='public'

    ACCESS_CHOICES = (
        (PRIVATE,'Private'),
        (PUBLIC,'Public')
    )
    
    title = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    create_at = models.DateTimeField()
    access = models.CharField(max_length=10,choices=ACCESS_CHOICES)
    user = models.ForeignKey(User,on_delete=models.RESTRICT)
    
    def was_published_recently(self):
        return self.create_at >= timezone.now() - datetime.timedelta(days=1)
    
    def __str__(self):
        return self.title
    
    