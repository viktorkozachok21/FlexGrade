from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FlexUser
        fields = ('__all__')


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
        fields = ('number','group')

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = ('code','fullname','book_number','group_number','degree','is_active','registered', 'avatar')
