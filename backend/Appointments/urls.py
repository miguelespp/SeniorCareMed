# mi_api/urls.py
from django.urls import path, include
from .views import AppointmentList, AppointmentCreate, AppointmentDetail


urlpatterns = [
    path('appointments/', AppointmentList.as_view(), name='appointment-list'),
    path('appointments/create/', AppointmentCreate.as_view(), name='appointment-create'),
    path('appointments/<int:pk>/', AppointmentDetail.as_view(), name='appointment-detail'),
]
