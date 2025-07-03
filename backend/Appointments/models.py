from django.db import models
from django.contrib.auth.models import User
from ServiceArea.models import ServiceArea

class Appointment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
    service_area = models.ForeignKey(ServiceArea, on_delete=models.CASCADE, null=False, blank=False)
    date = models.DateField()
    time = models.TimeField()
    reason = models.TextField()
    diagnosis = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.reason
