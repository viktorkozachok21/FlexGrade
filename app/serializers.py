from rest_framework import serializers
from django.contrib.auth.models import User
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')


class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.School
        fields = ('__all__')


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Department
        fields = ('__all__')


class SpecialtySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Specialty
        fields = ('__all__')


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Group
        fields = ('__all__')

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = ('fullname','code','avatar')
