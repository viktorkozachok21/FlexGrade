
from django.db import models
from model_utils.fields import StatusField
from model_utils import Choices
import uuid

from django.contrib.auth.models import AbstractUser


class FlexUser(AbstractUser):
    code = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sur_name = models.CharField(max_length=100)
    avatar = models.ImageField(default="img/default.webp", blank=True, upload_to="avatars")
    STATUS = Choices('Admin', 'Teacher','Student')
    status = StatusField(choices_name='STATUS')

    def __str__(self):
        return '%s' % self.username

    def fullname(self):
        return '%s %s %s' % (self.last_name,self.first_name,self.sur_name)

class School(models.Model):
    """
    School (institution of education)
    """
    full_name = models.CharField(max_length=255)
    short_name = models.CharField(max_length=100)
    head_of_school = models.CharField(max_length=100)
    head_of_school_short = models.CharField(max_length=50)
    head_assistant = models.CharField(max_length=100)
    head_assistant_short = models.CharField(max_length=50)


    def __str__(self):
        return '(%s) %s' % (self.pk,self.short_name)


class Department(models.Model):
    """
    Department (faculty) of a school
    """
    school = models.ForeignKey(School, on_delete=models.CASCADE, blank=True, null=True)
    full_name = models.CharField(max_length=255)
    head_of_department = models.CharField(max_length=100)
    head_of_department_short = models.CharField(max_length=50)


    def __str__(self):
        return '%s (%s)' % (self.full_name,self.school.short_name)

    class Meta:
        ordering = ['full_name']


class Specialty(models.Model):
    """
    Specialty (direction) of a department
    """
    department = models.ForeignKey(Department, on_delete=models.CASCADE, blank=True, null=True)
    full_name = models.CharField(max_length=255)
    short_name = models.CharField(max_length=3)
    DEGREE = Choices('Молодший бакалавр','Бакалавр','Молодший спеціаліст','Магістр','Спеціаліст')
    degree = StatusField(choices_name='DEGREE')

    def __str__(self):
        return '%s (%s) (%s)' % (self.full_name,self.degree,self.department.school.short_name)

    class Meta:
        ordering = ['full_name']


class Group(models.Model):
    """
    Group of students of a specialty
    """
    department = models.ForeignKey(Department, on_delete=models.CASCADE, blank=True, null=True)
    specialty = models.ForeignKey(Specialty, on_delete=models.CASCADE, blank=True, null=True)
    number = models.IntegerField()


    def __str__(self):
        return '%s-%s (%s)' % (self.number, self.specialty.short_name,self.department.school.short_name)

    def group(self):
        return '%s-%s' % (self.number, self.specialty.short_name)

    class Meta:
        ordering = ['-number']


class Student(models.Model):
    """
    App user (student of a group)
    """
    user = models.OneToOneField(FlexUser, on_delete=models.CASCADE)
    book_number = models.CharField(max_length=10)
    entry_order = models.CharField(max_length=100, blank=True, null=True)
    entry_order_date = models.DateField(blank=True, null=True)
    entry_order_type = models.CharField(max_length=100, blank=True, null=True)
    group = models.ForeignKey(Group, models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.user.fullname()

    def fullname(self):
        return self.__str__()

    def is_active(self):
        return self.user.is_active

    def code(self):
        return '%s' % self.user.code

    def avatar(self):
        return '%s' % self.user.avatar

    def group_number(self):
        return '%s-%s' % (self.group.number,self.group.specialty.short_name)

    def degree(self):
        return '%s' % self.group.specialty.degree

    def registered(self):
        return self.user.date_joined.date()


class Teacher(models.Model):
    """
    App user (teacher of a school)
    """
    user = models.OneToOneField(FlexUser, on_delete=models.CASCADE)
    school = models.ForeignKey(School, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.user.fullname()

    def fullname(self):
        return self.__str__()

    def code(self):
        return '%s' % self.user.code

    def email(self):
        return '%s' % self.user.email

    def avatar(self):
        return '%s' % self.user.avatar

    def registered(self):
        return self.user.date_joined.date()


class Subject(models.Model):
    """
    Model of a subject taught by a teacher
    """
    subject = models.CharField(max_length=100)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return '%s (%s)' % (self.subject,self.teacher_name())

    def teacher_name(self):
        return self.teacher.fullname()
