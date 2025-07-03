from django.db import models
from ServiceArea.models import ServiceArea

# Create your models here.
class ServiceAreaAvailability(models.Model):
    service_area_id = models.ForeignKey(ServiceArea, on_delete=models.CASCADE, null=False, blank=False)
    day_of_week = models.CharField(max_length=10, null=False, blank=False)
    start_time = models.TimeField(null=False, blank=False)
    end_time = models.TimeField(null=False, blank=False)
    