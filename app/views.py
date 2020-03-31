from django.shortcuts import render
from rest_framework import generics

from django.contrib.auth.models import User

from . import models
from . import serializers

from django.http import HttpResponseRedirect

def app(request):
    return render(request, 'index.html')

def home(request):
    return HttpResponseRedirect('/')

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

class StudentListView(generics.ListAPIView):
    queryset = models.Student.objects.all()
    serializer_class = serializers.StudentSerializer
