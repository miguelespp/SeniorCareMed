from .serializers import DoctorSerializer, SpecialtySerializer
from .models import Doctor, Specialty
from rest_framework import generics, permissions
from django.shortcuts import get_object_or_404
from urllib.parse import unquote


class DoctorViewSet(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [permissions.IsAuthenticated]

class DoctorBySpecialtyViewSet(generics.ListAPIView):
    serializer_class = DoctorSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        specialty_name = self.kwargs['specialty']
        specialty_name = unquote(specialty_name)
        print(specialty_name)
        specialty = get_object_or_404(Specialty, name=specialty_name)
        # quiero ver si esto funciona bien, quiero ver el response
    
        return Doctor.objects.filter(specialty=specialty)
    
class SpecialtyViewSet(generics.ListCreateAPIView):
    queryset = Specialty.objects.all()
    serializer_class = SpecialtySerializer
    permission_classes = [permissions.IsAuthenticated]
