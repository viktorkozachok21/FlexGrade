from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FlexUser
        fields = ('__all__')


class SemesterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Semester
        fields = ('__all__')


class DisciplinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Discipline
        fields = ('__all__')


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Subject
        fields = ('subject', 'teacher_name')


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Group
        fields = ('number','group')

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = ('code','fullname','book_number','group_number','degree','is_active','registered', 'avatar')


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ('code','fullname','is_active','registered','email','avatar')
