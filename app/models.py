
from django.db import models
from django.contrib.auth.models import AbstractUser
from model_utils.fields import StatusField
from model_utils import Choices
from django.utils import timezone
import uuid


class School(models.Model):
    """The school (college) model"""
    full_name = models.CharField(max_length=255)
    short_name = models.CharField(max_length=100)
    director = models.CharField(max_length=100)
    director_short = models.CharField(max_length=50)
    assistant = models.CharField(max_length=100)
    assistant_short = models.CharField(max_length=50)

    def __str__(self):
        return f'({self.pk}) {self.short_name}'


class FlexUser(AbstractUser):
    """A college's member"""
    code = models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    school = models.ForeignKey(School,on_delete=models.CASCADE,null=True)
    sur_name = models.CharField(max_length=100,null=True)
    avatar = models.ImageField(default="avatars/default.webp",upload_to="avatars")
    STATUS = Choices('Admin','Teacher','Student')
    status = StatusField(choices_name='STATUS')

    def __str__(self):
        return f'{self.username} ({self.fullname})'

    @property
    def fullname(self):
        return f'{self.last_name} {self.first_name} {self.sur_name}'

    @property
    def photo(self):
        return f'{self.avatar}'

    @property
    def registered(self):
        return self.date_joined.date()

    def change_active(self):
        self.is_active = False
        self.save(update_fields=['is_active'])


class Department(models.Model):
    """Department (faculty) of college"""
    school = models.ForeignKey(School,on_delete=models.CASCADE,null=True)
    full_name = models.CharField(max_length=255)
    manager = models.CharField(max_length=100)
    manager_short = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.full_name} ({self.school.short_name})'

    class Meta:
        ordering = ['full_name']


class Specialty(models.Model):
    """Specialty of department"""
    department = models.ForeignKey(Department,on_delete=models.CASCADE,null=True)
    full_name = models.CharField(max_length=255)
    short_name = models.CharField(max_length=3)
    DEGREE = Choices('Молодший бакалавр','Бакалавр','Молодший спеціаліст','Магістр','Спеціаліст')
    degree = StatusField(choices_name='DEGREE')

    def __str__(self):
        return f'{self.full_name} ({self.degree}) [{self.department.school.short_name}]'

    @property
    def department_name(self):
        return f'{self.department.full_name}'

    class Meta:
        ordering = ['full_name']


class Group(models.Model):
    """Group of students of specialty"""
    department = models.ForeignKey(Department,on_delete=models.CASCADE,null=True)
    specialty = models.ForeignKey(Specialty, on_delete=models.CASCADE,null=True)
    number = models.IntegerField()

    def __str__(self):
        return f'{self.number}-{self.specialty.short_name} ({self.specialty.degree}) [{self.department.full_name}]'

    @property
    def group(self):
        return f'{self.number}-{self.specialty.short_name}'

    class Meta:
        ordering = ['number']


class Student(models.Model):
    """App user (student of a group)"""
    user = models.OneToOneField(FlexUser,on_delete=models.CASCADE,primary_key=True)
    book_number = models.CharField(max_length=10)
    group = models.ForeignKey(Group,models.SET_NULL,blank=True,null=True)
    old_degree = models.CharField(max_length=50,blank=True,null=True)

    def __str__(self):
        return self.user.fullname

    def end(self):
        self.user.date_joined = timezone.now()
        self.old_degree = self.group.specialty.degree
        self.group = None
        self.user.save(update_fields=['date_joined'])
        self.save(update_fields=['group','old_degree'])

    @property
    def group_number(self):
        if self.group != None:
            return f'{self.group.group}'
        else:
            return "Відраховані"

    @property
    def department(self):
        return f'{self.group.specialty.department.manager_short}'

    @property
    def degree(self):
        if self.group != None:
            return f'{self.group.specialty.degree}'
        else:
            return f'{self.old_degree}'


class Teacher(models.Model):
    """App user (college's teacher)"""
    user = models.OneToOneField(FlexUser,on_delete=models.CASCADE,primary_key=True)

    def __str__(self):
        return f'{self.user.fullname}'


class Subject(models.Model):
    """Subject taught by a teacher"""
    subject = models.CharField(max_length=100)
    teacher = models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True)

    def __str__(self):
        return f'{self.subject} ({self.teacher_name})'

    @property
    def teacher_name(self):
        return self.teacher.__str__()

    class Meta:
        ordering = ['subject']


class Semester(models.Model):
    """Group's education period"""
    semester = models.CharField(max_length=100)
    number = models.IntegerField(default=0)
    students = models.ManyToManyField(Student)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.semester} [{"],[".join([str(g.book_number) for g in self.students.all()])}]'

    class Meta:
        ordering = ['number']


class Discipline(models.Model):
    """Subject that is included in a semester"""
    semester = models.ForeignKey(Semester,on_delete=models.CASCADE,null=True)
    number = models.CharField(max_length=2)
    subject = models.CharField(max_length=100)
    form = models.CharField(max_length=50)
    hours = models.CharField(max_length=3)
    credits = models.CharField(max_length=10)
    discipline_date = models.DateField(default=timezone.now)
    teacher = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.subject} ({self.teacher}) [{self.semester.__str__()}]'

    class Meta:
        ordering = ['semester']


class Grade(models.Model):
    """The mark's model"""
    student = models.ForeignKey(Student,on_delete=models.CASCADE,null=True)
    discipline = models.ForeignKey(Discipline,on_delete=models.CASCADE,null=True)
    grade = models.CharField(default='',max_length=10)
    score = models.CharField(default='',max_length=3)

    def __str__(self):
        return f'({self.grade}) {self.student.__str__()} [{self.discipline.subject}-{self.discipline.teacher}]'

    class Meta:
        ordering = ['pk']
