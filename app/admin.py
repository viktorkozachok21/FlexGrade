from django.contrib import admin

from .models import School, Department, Specialty, Group, Student

admin.site.register(School)
admin.site.register(Department)
admin.site.register(Specialty)
admin.site.register(Group)
admin.site.register(Student)
