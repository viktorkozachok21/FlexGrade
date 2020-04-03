from django.shortcuts import get_object_or_404, render
from rest_framework import generics

from .models import *
from . import serializers

import random
import string
from django.core import serializers as json

from django.http import JsonResponse, HttpResponseRedirect
from rest_framework.views import APIView

def app(request):
    return render(request, 'index.html')

def home(request):
    return HttpResponseRedirect('/')


class StudentView(APIView):

    def get(self, request):
        """
        Generate a random password of letters and digits
        """
        alphabet = string.ascii_letters + string.digits
        return JsonResponse({"success":True, "username":''.join(random.choice(alphabet) for i in range(15)), "password":''.join(random.choice(alphabet) for i in range(10))}, status=200)


    def post(self, request):
        """
        Create a new user from the given request.data
        """
        username = request.data.get('username')
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')
        sur_name = request.data.get('sur_name')
        book_number = request.data.get('book_number')
        entry_order= request.data.get('entry_order')
        entry_order_date = request.data.get('entry_order_date')
        entry_order_type = request.data.get('entry_order_type')
        if FlexUser.objects.filter(username__iexact=username).exists():
            return JsonResponse({"success":False, "message":"Надане ім'я користувача вже використовується!"}, status=200)
        elif Student.objects.filter(book_number__iexact=book_number, user__is_active=True).exists():
            return JsonResponse({"success":False, "message":"Користувач з таким номером залікової книжки вже зареєстрований!"}, status=200)
        user = FlexUser.objects.create(username=username, first_name=first_name, last_name=last_name, sur_name=sur_name, status='Student')
        user.set_password(str(request.data.get('password')))
        user.avatar = request.FILES['avatar']
        user.save()
        print(user.avatar)
        group_number = request.data.get('group_number')
        number, short_name = group_number.split('-')
        specialty = get_object_or_404(Specialty, short_name=short_name)
        group = get_object_or_404(Group, number=number, specialty=specialty)
        student = Student.objects.create(user=user, group=group, book_number=book_number, entry_order=entry_order, entry_order_date=entry_order_date, entry_order_type=entry_order_type)
        student.save()
        return JsonResponse({"success":True, "message":"Нового користувача успішно зареєстровано!"}, status=200)


class ActiveUserView(APIView):

    def post(self, request):
        """
        Show information about active user
        """
        response = {}
        username = request.data.get('username')
        active_user = get_object_or_404(FlexUser, username__iexact=username)
        if active_user.status == 'Student':
            active = get_object_or_404(Student, user=active_user)
            response['code'] = active.user.code
            response['fullname'] = active.fullname()
            response['book_number'] = active.book_number
            response['group_number'] = active.group_number()
            response['registered'] = active.registered()
            response['avatar'] = active.avatar()
            response['status'] = active_user.status
            return JsonResponse({"success":True, "profile":response}, status=200)
        elif active_user.status == 'Admin':
            return JsonResponse({"success":True, "status":'Admin'}, status=200)
        # elif request.user.status == 'Teacher':
        #     active_user = get_object_or_404(Teacher, user=request.user)


# class UserListView(generics.ListAPIView):
#     queryset = FlexUser.objects.all()
#     serializer_class = serializers.UserSerializer

# class SchoolListView(generics.ListAPIView):
#     queryset = models.School.objects.all()
#     serializer_class = serializers.SchoolSerializer
#
# class DepartmentListView(generics.ListAPIView):
#     queryset = models.Department.objects.all()
#     serializer_class = serializers.DepartmentSerializer
#
# class SpecialtyListView(generics.ListAPIView):
#     queryset = models.Specialty.objects.all()
#     serializer_class = serializers.SpecialtySerializer
#
class GroupListView(generics.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = serializers.GroupSerializer
#
class StudentListView(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = serializers.StudentSerializer
