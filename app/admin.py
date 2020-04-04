from django.contrib import admin

from .models import FlexUser, School, Department, Specialty, Group, Student, Teacher

admin.site.register(FlexUser)
admin.site.register(School)
admin.site.register(Department)
admin.site.register(Specialty)
admin.site.register(Group)
admin.site.register(Student)
admin.site.register(Teacher)
