from django.urls import include, path

from . import views

urlpatterns = [
    # path('users/', views.UserListView.as_view()),
    path('students/', views.StudentListView.as_view()),
]
