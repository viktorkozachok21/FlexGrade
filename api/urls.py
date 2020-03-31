from django.urls import include, path

urlpatterns = [
    path('app/', include('app.urls')),
    path('auth/', include('rest_auth.urls')),
]
