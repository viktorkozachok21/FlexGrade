from rest_framework.serializers import ModelSerializer, ReadOnlyField
from . import models


class UserSerializer(ModelSerializer):
    class Meta:
        model = models.FlexUser
        fields = ('fullname', 'email', 'avatar')


class SchoolSerializer(ModelSerializer):
    class Meta:
        model = models.School
        fields = ('__all__')


class DepartmentSerializer(ModelSerializer):
    class Meta:
        model = models.Department
        fields = ('__all__')


class SpecialtySerializer(ModelSerializer):
    class Meta:
        model = models.Specialty
        fields = ('id','full_name','short_name','degree','department_name')


class StudentSerializer(ModelSerializer):
    code = ReadOnlyField(source='user.code')
    fullname = ReadOnlyField(source='user.fullname')
    avatar = ReadOnlyField(source='user.photo')
    is_active = ReadOnlyField(source='user.is_active')
    registered = ReadOnlyField(source='user.registered')

    class Meta:
        model = models.Student
        fields = ('code','fullname','book_number','group_number','degree','is_active','registered', 'avatar')


class GroupSerializer(ModelSerializer):
    class Meta:
        model = models.Group
        fields = ('number','group')


class SemesterSerializer(ModelSerializer):
    class Meta:
        model = models.Semester
        fields = ('__all__')


class DisciplinesSerializer(ModelSerializer):
    class Meta:
        model = models.Discipline
        fields = ('__all__')


class GradeSerializer(ModelSerializer):
    class Meta:
        model = models.Grade
        fields = ('__all__')


class TeacherSerializer(ModelSerializer):
    code = ReadOnlyField(source='user.code')
    fullname = ReadOnlyField(source='user.fullname')
    email = ReadOnlyField(source='user.email')
    avatar = ReadOnlyField(source='user.photo')
    is_active = ReadOnlyField(source='user.is_active')
    registered = ReadOnlyField(source='user.registered')

    class Meta:
        model = models.Teacher
        fields = ('code','fullname','is_active','registered','email','avatar')


class SubjectSerializer(ModelSerializer):
    class Meta:
        model = models.Subject
        fields = ('pk','subject','teacher_name')
