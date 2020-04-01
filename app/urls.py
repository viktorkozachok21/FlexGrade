from django.urls import include, path

from .views import *

urlpatterns = [
    path('students/', StudentListView.as_view()),
    path('registration/', StudentView.as_view()),
]
