from django.urls import include, path

from .views import *

urlpatterns = [
    path('registration/', RegistrationView.as_view()),
    path('registration/<code>', RegistrationView.as_view()),
    path('edit_profile/', EditProfileView.as_view()),

    path('school/<code>', SchoolView.as_view()),
    path('departments/<code>', DepartmentView.as_view()),
    path('specialties/<code>', SpecialtyView.as_view()),

    path('active_user/', ActiveUserView.as_view()),
    path('active_user/<username>', ActiveUserView.as_view()),
    path('admins/', AdminListView.as_view()),

    path('students/<code>', StudentListView.as_view()),
    path('teachers/<code>', TeacherListView.as_view()),
    path('groups/<code>', GroupListView.as_view()),
    path('subjects/<code>', SubjectView.as_view()),
    path('semester/<code>', SemestersView.as_view()),

    path('grades/', GradesView.as_view()),
    path('grades/<students>', GradesView.as_view()),
]
