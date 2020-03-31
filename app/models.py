from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import datetime, timedelta
import uuid

class FlexUser(AbstractUser):
    last_name = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    sur_name = models.CharField(max_length=100)
    registered = models.DateTimeField(auto_now_add=True)
    STATUS = (
        ('A', 'Admin'),
        ('T', 'Teacher'),
        ('S', 'Student'),
    )
    status = models.CharField(max_length=1, choices=STATUS, default='S')
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.last_name + ' ' + self.first_name + ' ' + self.sur_name
