from django.db import models
from django.contrib.auth.models import User
from Doctors.models import Doctor

class Appointment(models.Model):
    date = models.DateField()
    time = models.TimeField()
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, null=False, blank=False)
    reason = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)

    def __str__(self):
        return self.name
