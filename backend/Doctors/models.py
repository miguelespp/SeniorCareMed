from django.db import models

# Create your models here.

class Specialty(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()

    def __str__(self):
        return self.name

class Doctor(models.Model):
    name = models.CharField(max_length=120)
    specialty = models.ForeignKey(Specialty, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    work_days = models.CharField(max_length=120)
    work_hour_start = models.IntegerField()
    work_hour_end = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name
    
    def get_work_days(self):
        return [int(day) for day in self.work_days.split(',')]
