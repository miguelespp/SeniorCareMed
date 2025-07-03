from django.db import models
from ServiceArea.models import ServiceArea

# Create your models here.
class Staff(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    service_area = models.ForeignKey(ServiceArea, on_delete=models.CASCADE, null=False, blank=False)