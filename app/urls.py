from django.urls import include, path

from .views import *

urlpatterns = [
    path('active_user/', ActiveUserView.as_view()),
    path('groups/', GroupListView.as_view()),
    path('students/', StudentListView.as_view()),
    path('teachers/', TeacherListView.as_view()),
    path('registration/', AddUserView.as_view()),
]
