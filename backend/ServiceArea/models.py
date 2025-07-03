from django.db import models

# Create your models here.
class ServiceArea(models.Model):
    service_area = models.CharField(max_length=255, unique=True)
    is_available = models.BooleanField(default=True)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.service_area} - {'Available' if self.is_available else 'Unavailable'}"
    
    class Meta:
        verbose_name = "Service Area Availability"
        verbose_name_plural = "Service Area Availabilities"
        ordering = ['service_area']