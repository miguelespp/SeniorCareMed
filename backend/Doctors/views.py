from .serializers import DoctorSerializer
from .models import Doctor
from rest_framework import viewsets

# Create your views here.

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
