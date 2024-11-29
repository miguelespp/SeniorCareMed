from django.db.models.signals import post_migrate
from django.dispatch import receiver
from .models import Specialty, Doctor


@receiver(post_migrate)
def create_specialties(sender, **kwargs):
    if sender.name == 'Doctors': 
        specialties = [
            {'name': 'Cardiología', 'description': 'Especialidad médica que se ocupa del corazón.'},
            {'name': 'Dermatología', 'description': 'Especialidad médica que se ocupa de la piel.'},
            {'name': 'Endocrinología', 'description': 'Especialidad médica que se ocupa de las glándulas y hormonas.'},
            {'name': 'Gastroenterología', 'description': 'Especialidad médica que se ocupa del aparato digestivo.'},
            {'name': 'Geriatría', 'description': 'Especialidad médica que se ocupa de la atención de las personas mayores.'},
            {'name': 'Ginecología', 'description': 'Especialidad médica que se ocupa de la salud de la mujer.'},
            {'name': 'Neurología', 'description': 'Especialidad médica que se ocupa del sistema nervioso.'},
        ]
        for specialty in specialties:
            Specialty.objects.get_or_create(name=specialty['name'], defaults={'description': specialty['description']})

        doctors = [
            {'name': 'Juan Pérez', 'specialty': 'Cardiología', 'phone': '123456789', 'email': 'juan.perez@example.com', 'work_days': '0,1,2,3,4', 'work_hour_start': 9, 'work_hour_end': 17},
            {'name': 'María González', 'specialty': 'Dermatología', 'phone': '987654321', 'email': 'maria.gonzalez@example.com', 'work_days': '1,2,3,4,5', 'work_hour_start': 10, 'work_hour_end': 18},
            {'name': 'Carlos Sánchez', 'specialty': 'Endocrinología', 'phone': '456123789', 'email': 'carlos.sanchez@example.com', 'work_days': '2,3,4,5,6', 'work_hour_start': 8, 'work_hour_end': 16},
            {'name': 'Ana Martínez', 'specialty': 'Gastroenterología', 'phone': '321654987', 'email': 'ana.martinez@example.com', 'work_days': '0,1,2,3,4', 'work_hour_start': 9, 'work_hour_end': 17},
            {'name': 'José Rodríguez', 'specialty': 'Geriatría', 'phone': '654987321', 'email': 'jose.rodriguez@example.com', 'work_days': '1,2,3,4,5', 'work_hour_start': 10, 'work_hour_end': 18},
            {'name': 'Laura Hernández', 'specialty': 'Ginecología', 'phone': '789123456', 'email': 'laura.hernandez@example.com', 'work_days': '2,3,4,5,6', 'work_hour_start': 8, 'work_hour_end': 16},
            {'name': 'Luis Martínez', 'specialty': 'Neurología', 'phone': '111223344', 'email': 'luis.martinez@example.com', 'work_days': '0,2,4,5,6', 'work_hour_start': 9, 'work_hour_end': 17},
            {'name': 'Isabel García', 'specialty': 'Cardiología', 'phone': '999123456', 'email': 'isabel.garcia@example.com', 'work_days': '0,1,2,3,4', 'work_hour_start': 10, 'work_hour_end': 18},
            {'name': 'Luis Hernández', 'specialty': 'Cardiología', 'phone': '987654321', 'email': 'luis.hernandez@example.com', 'work_days': '1,2,3,4,5', 'work_hour_start': 8, 'work_hour_end': 16},
            {'name': 'Felipe Sánchez', 'specialty': 'Dermatología', 'phone': '222333444', 'email': 'felipe.sanchez@example.com', 'work_days': '0,1,2,3,4', 'work_hour_start': 9, 'work_hour_end': 17},
            {'name': 'Elena Paredes', 'specialty': 'Dermatología', 'phone': '555666777', 'email': 'elena.paredes@example.com', 'work_days': '1,2,3,4,5', 'work_hour_start': 10, 'work_hour_end': 18},
            {'name': 'Ricardo Molina', 'specialty': 'Endocrinología', 'phone': '444555666', 'email': 'ricardo.molina@example.com', 'work_days': '0,1,2,3,4', 'work_hour_start': 9, 'work_hour_end': 17},
            {'name': 'Laura Romero', 'specialty': 'Endocrinología', 'phone': '888999000', 'email': 'laura.romero@example.com', 'work_days': '1,2,3,4,5', 'work_hour_start': 10, 'work_hour_end': 18},
            {'name': 'José Luis Gómez', 'specialty': 'Gastroenterología', 'phone': '333444555', 'email': 'jose.gomez@example.com', 'work_days': '0,1,2,3,4', 'work_hour_start': 9, 'work_hour_end': 17},
            {'name': 'María Isabel Álvarez', 'specialty': 'Gastroenterología', 'phone': '666777888', 'email': 'maria.alvarez@example.com', 'work_days': '1,2,3,4,5', 'work_hour_start': 10, 'work_hour_end': 18},
            {'name': 'Carlos Mendoza', 'specialty': 'Geriatría', 'phone': '555111333', 'email': 'carlos.mendoza@example.com', 'work_days': '0,1,2,3,4', 'work_hour_start': 9, 'work_hour_end': 17},
            {'name': 'Victoria Rodríguez', 'specialty': 'Geriatría', 'phone': '999000111', 'email': 'victoria.rodriguez@example.com', 'work_days': '1,2,3,4,5', 'work_hour_start': 10, 'work_hour_end': 18},
            {'name': 'Miguel Ángel Ruiz', 'specialty': 'Ginecología', 'phone': '444555666', 'email': 'miguel.ruiz@example.com', 'work_days': '0,1,2,3,4', 'work_hour_start': 9, 'work_hour_end': 17},
            {'name': 'Beatriz López', 'specialty': 'Ginecología', 'phone': '777888999', 'email': 'beatriz.lopez@example.com', 'work_days': '1,2,3,4,5', 'work_hour_start': 10, 'work_hour_end': 18}
        ]
        for doctor in doctors:
            specialty = Specialty.objects.get(name=doctor['specialty'])
            Doctor.objects.get_or_create(
                name=doctor['name'],
                specialty=specialty,
                phone=doctor['phone'],
                email=doctor['email'],
                work_days=doctor['work_days'],
                work_hour_start=doctor['work_hour_start']
            )
