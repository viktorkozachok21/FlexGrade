from django.shortcuts import render
from rest_framework import generics

from django.contrib.auth.models import User

from . import models
from . import serializers

import random
import string

from django.http import JsonResponse, HttpResponseRedirect

from rest_framework.views import APIView

class StudentView(APIView):

    def get(self, request):
        """
        Generate a random password of letters and digits
        """
        alphabet = string.ascii_letters + string.digits
        return JsonResponse({"success":True, "password":''.join(random.choice(alphabet) for i in range(10))}, status=200)


    def post(self, request):
        """
        Create a new user from the given request.data
        """
        username = request.data.get('username')
        if User.objects.filter(username__iexact=username).exists():
            return JsonResponse({"success":False, "message":"Надане ім'я користувача вже використовується!"}, status=200)
        user = User.objects.create(username=username)
        user.set_password(str(request.data.get('password')))
        user.save()
        return JsonResponse({"success":True, "message":"Нового користувача успішно зареєстровано!"}, status=200)

def app(request):
    return render(request, 'index.html')

def home(request):
    return HttpResponseRedirect('/')

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

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
