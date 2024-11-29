from rest_framework import serializers
from .models import Doctor, Specialty

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'
        read_only_fields = ('id',)

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['work_days'] = instance.get_work_days()
        return representation

    def to_internal_value(self, data):
        work_days = data.get('work_days')
        if work_days:
            data['work_days'] = ','.join(map(str, work_days))
        return super().to_internal_value(data)

class SpecialtySerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialty
        fields = '__all__'
        read_only_fields = ('id',)
    
