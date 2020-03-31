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

# class UserListView(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = serializers.UserSerializer

class SchoolListView(generics.ListAPIView):
    queryset = models.School.objects.all()
    serializer_class = serializers.SchoolSerializer

class DepartmentListView(generics.ListAPIView):
    queryset = models.Department.objects.all()
    serializer_class = serializers.DepartmentSerializer

class SpecialtyListView(generics.ListAPIView):
    queryset = models.Specialty.objects.all()
    serializer_class = serializers.SpecialtySerializer

class GroupListView(generics.ListAPIView):
    queryset = models.Group.objects.all()
    serializer_class = serializers.GroupSerializer

class StudentListView(generics.ListAPIView):
    queryset = models.Student.objects.all()
    serializer_class = serializers.StudentSerializer
