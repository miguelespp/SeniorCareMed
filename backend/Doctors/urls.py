# mi_api/urls.py
from django.urls import path, include
from .views import DoctorBySpecialtyViewSet, DoctorViewSet, SpecialtyViewSet

urlpatterns = [
    path('doctors/', DoctorViewSet.as_view(), name='doctor-list'),
    path('doctors/<str:specialty>/', DoctorBySpecialtyViewSet.as_view(), name='doctor-by-specialty'),
    path('specialties/', SpecialtyViewSet.as_view(), name='specialty-list'),
]
