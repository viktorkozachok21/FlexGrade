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


class AddUserView(APIView):

    def get(self, request):
        """
        Generate a random username and password of letters and digits
        """
        alphabet = string.ascii_letters + string.digits
        return JsonResponse({"success":True, "username":''.join(random.choice(alphabet) for i in range(15)), "password":''.join(random.choice(alphabet) for i in range(10))}, status=200)


    def post(self, request):
        """
        Create a new user with given request.data
        """
        if 'email' in request.POST:
            username = request.data.get('username')
            first_name = request.data.get('first_name')
            last_name = request.data.get('last_name')
            sur_name = request.data.get('sur_name')
            email = request.data.get('email')
            if FlexUser.objects.filter(username__iexact=username).exists():
                return JsonResponse({"success":False, "message":"Надане ім'я користувача вже використовується!"}, status=200)
            user = FlexUser.objects.create(username=username, email=email, first_name=first_name, last_name=last_name, sur_name=sur_name, status='Teacher')
            user.set_password(str(request.data.get('password')))
            user.avatar = request.FILES['avatar']
            user.save()
            school = get_object_or_404(School, pk=1)
            teacher = Teacher.objects.create(user=user, school=school)
            teacher.save()
            return JsonResponse({"success":True, "message":"Нового користувача успішно зареєстровано!"}, status=200)
        elif 'book_number' in request.POST:
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
            group_number = request.data.get('group_number')
            number, short_name = group_number.split('-')
            specialty = get_object_or_404(Specialty, short_name=short_name)
            group = get_object_or_404(Group, number=number, specialty=specialty)
            student = Student.objects.create(user=user, group=group, book_number=book_number, entry_order=entry_order, entry_order_date=entry_order_date, entry_order_type=entry_order_type)
            student.save()
            return JsonResponse({"success":True, "message":"Нового користувача успішно зареєстровано!"}, status=200)
        else:
            return JsonResponse({"success":False, "message":"Під час реєстраціє виникла помилка, спробуйте пізніше!"}, status=400)


class ActiveUserView(APIView):

    def post(self, request):
        """
        Show information about active user
        """
        response = {}
        username = request.data.get('username')
        active_user = get_object_or_404(FlexUser, username=username)
        if active_user.status == 'Student':
            active = get_object_or_404(Student, user=active_user)
            response['code'] = active.code()
            response['fullname'] = active.fullname()
            response['book_number'] = active.book_number
            response['group_number'] = active.group_number()
            response['registered'] = active.registered()
            response['avatar'] = active.avatar()
            response['status'] = active_user.status
            return JsonResponse({"success":True, "profile":response}, status=200)
        elif active_user.status == 'Teacher':
            active = get_object_or_404(Teacher, user=active_user)
            response['code'] = active.code()
            response['fullname'] = active.fullname()
            response['email'] = active.email()
            response['registered'] = active.registered()
            response['avatar'] = active.avatar()
            response['status'] = active_user.status
            return JsonResponse({"success":True, "profile":response}, status=200)
        elif active_user.status == 'Admin':
            return JsonResponse({"success":True, "status":'Admin'}, status=200)
        else:
            return JsonResponse({"success":False, "message":'Під час обробки запиту виникла помилка, спробуйте пізніше.'}, status=400)


class NewSubjectView(APIView):

    def post(self, request):
        """
        Registration a new subject with given data
        """
        print('Into')
        code = request.data.get('teacher')
        subject = request.data.get('subject')
        user = get_object_or_404(FlexUser, code=code)
        teacher = get_object_or_404(Teacher, user=user)
        if Subject.objects.filter(subject__iexact=subject).exists():
            return JsonResponse({"success":False, "message":"Дисципліну з такою назвою вже зареєстровано!"}, status=200)
        new_subject = Subject.objects.create(teacher=teacher, subject=subject)
        new_subject.save()
        return JsonResponse({"success":True, "message":'Нову навчальну дисципліну успішно донано.'}, status=200)


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
class SubjectListView(generics.ListAPIView):
    queryset = Subject.objects.all()
    serializer_class = serializers.SubjectSerializer

class GroupListView(generics.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = serializers.GroupSerializer


class StudentListView(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = serializers.StudentSerializer


class TeacherListView(generics.ListAPIView):
    queryset = Teacher.objects.all()
    serializer_class = serializers.TeacherSerializer
