from django.contrib.auth.models import User
from django.db import models
from datetime import datetime, timedelta
import uuid


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
        return str('%s' % (self.short_name))


class Department(models.Model):
    """
    Department (faculty) of a school
    """
    school = models.ForeignKey(School, on_delete=models.CASCADE, null=True, blank=True)
    full_name = models.CharField(max_length=255)
    head_of_department = models.CharField(max_length=100)
    head_of_department_short = models.CharField(max_length=50)


    def __str__(self):
        return str('%s (%s)' % (self.full_name,self.school.short_name))

    class Meta:
        ordering = ['full_name']


class Specialty(models.Model):
    """
    Specialty (direction) of a department
    """
    department = models.ForeignKey(Department, on_delete=models.CASCADE, null=True, blank=True)
    full_name = models.CharField(max_length=255)
    short_name = models.CharField(max_length=3)
    DEGREES = (
        ('МС', 'Молодший спеціаліст'),
        ('МБ', 'Молодший бакалавр'),
        ('Б', 'Бакалавр'),
        ('М', 'Магістр'),
        ('С', 'Спеціаліст'),
    )
    degree = models.CharField(max_length=2, choices=DEGREES, default='МБ')


    def __str__(self):
        return str('%s (%s) (%s)' % (self.full_name,self.get_degree_display(),self.department.school.short_name))

    class Meta:
        ordering = ['full_name']


class Group(models.Model):
    """
    Group of students of a specialty
    """
    department = models.ForeignKey(Department, on_delete=models.CASCADE, null=True, blank=True)
    specialty = models.ForeignKey(Specialty, on_delete=models.CASCADE, null=True, blank=True)
    number = models.IntegerField()


    def __str__(self):
        return str('%s-%s (%s)' % (self.number, self.specialty.short_name,self.department.school.short_name))

    class Meta:
        ordering = ['number']


class Student(models.Model):
    """
    App user (student of a group)
    """
    code = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    book_number = models.CharField(max_length=10)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    sur_name = models.CharField(max_length=100)
    birth_date = models.DateField()
    entry_order = models.CharField(max_length=100)
    entry_order_date = models.DateField()
    entry_order_type = models.CharField(max_length=100)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, null=True, blank=True)
    avatar = models.ImageField(default="img/default.webp", blank=True, null=True, upload_to="avatars")
    registered = models.DateField(auto_now_add=True)


    def __str__(self):
        return str('%s %s %s' % (self.last_name,self.first_name,self.sur_name))


    class Meta:
        ordering = ['last_name']
