from django.urls import include, path

from .views import *

urlpatterns = [
    path('registration/', RegistrationView.as_view()),
    path('edit_profile/', EditProfileView.as_view()),

    path('school/', SchoolView.as_view()),
    path('departments/', DepartmentListView.as_view()),
    path('department/', DepartmentView.as_view()),

    path('active_user/', ActiveUserView.as_view()),
    path('active_user/<username>', ActiveUserView.as_view()),

    path('admins/', AdminListView.as_view()),
    path('groups/', GroupListView.as_view()),
    path('students/', StudentListView.as_view()),
    path('teachers/', TeacherListView.as_view()),

    path('subjects/', SubjectListView.as_view()),
    path('edit_subject/', SubjectView.as_view()),

    path('edit_semester/', SemestersView.as_view()),
    path('edit_semester/<code>', SemestersView.as_view()),

    path('edit_grade/', GradesView.as_view()),
    path('edit_grade/<students>', GradesView.as_view()),
]
