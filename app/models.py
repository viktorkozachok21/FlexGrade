from django.contrib.auth.models import User
from django.db import models
from datetime import datetime, timedelta
import uuid


class School(models.Model):
    full_name = models.CharField(max_length=255)
    short_name = models.CharField(max_length=100)
    head_of_school = models.CharField(max_length=100)
    head_of_school_short = models.CharField(max_length=50)
    head_assistant = models.CharField(max_length=100)
    head_assistant_short = models.CharField(max_length=50)

    def __str__(self):
        return self.short_name


class Department(models.Model):
    school = models.ForeignKey(School, on_delete=models.CASCADE, null=True, blank=True)
    full_name = models.CharField(max_length=255)
    head_of_department = models.CharField(max_length=100)

    def __str__(self):
        return self.full_name + ' (' + self.school.short_name + ')'


class Specialty(models.Model):
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
        return self.full_name + ' (' + self.get_degree_display() + ') (' + self.department.school.short_name + ')'


class Group(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE, null=True, blank=True)
    specialty = models.ForeignKey(Specialty, on_delete=models.CASCADE, null=True, blank=True)
    number = models.IntegerField()

    def group_number(self):
        return self.__str__

    def __str__(self):
        return str('%s-%s (%s)' % (self.number, self.specialty.short_name,self.department.school.short_name))


class Student(models.Model):
    code = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
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
        return self.last_name + ' ' + self.first_name + ' ' + self.sur_name

    def fullname(self):
        return self.last_name + ' ' + self.first_name + ' ' + self.sur_name
