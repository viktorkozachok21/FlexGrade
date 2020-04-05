from django.urls import include, path

from .views import *

urlpatterns = [
    path('active_user/<username>', ActiveUserView.as_view()),
    path('registration/', AddUserView.as_view()),
    path('groups/', GroupListView.as_view()),
    path('students/', StudentListView.as_view()),
    path('teachers/', TeacherListView.as_view()),
    path('subjects/', SubjectListView.as_view()),
    path('edit_subject/', EditSubjectView.as_view()),
    path('edit_semester/', EditSemesterView.as_view()),
    path('edit_semester/<group>', EditSemesterView.as_view()),
]
