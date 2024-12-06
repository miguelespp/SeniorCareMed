# SeniorCareMed

**SeniorCareMed** es una aplicación web diseñada para proporcionar una experiencia de usuario inclusiva y adaptativa para adultos mayores al reservar citas médicas. El proyecto utiliza **Django** para la API del backend y **React** para el frontend, organizados en carpetas separadas: `backend` y `frontend`.

## Características principales

- **Interfaces adaptativas**: Diseñadas para mejorar la accesibilidad y usabilidad para adultos mayores.
- **Gestión de citas médicas**: Permite a los usuarios programar, modificar y cancelar citas médicas fácilmente.
- **API RESTful**: Implementada con Django para la gestión eficiente de datos.
- **Frontend dinámico**: Desarrollado con React para ofrecer una experiencia de usuario rápida y fluida.

## Estructura del proyecto

```plaintext
SeniorCareMed/
│
├── backend/          # Backend basado en Django
│   ├── manage.py     # Archivo principal de Django
│   ├── appointments/ # Aplicación de Django para las citas
│   ├── users/        # Aplicación de Django para gestión de usuarios
│   └── requirements.txt # Dependencias del backend
│
├── frontend/         # Frontend basado en React
│   ├── public/       # Archivos estáticos públicos
│   ├── src/          # Código fuente de React
│   └── package.json  # Dependencias del frontend
│
└── README.md         # Este archivo
```

## Requisitos
- Python 3.11 o superior
- Node.js 20 o superior

## Pasos para ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/miguelespp/SeniorCareMed.git
    cd SeniorCareMed
    ```
2. Instalar las dependencias del backend:
    ```bash
    cd backend
    pip install -r requirements.txt
    ```
3. Aplicar las migraciones de la base de datos:
    ```bash
    python manage.py migrate
    ```
4. Iniciar el servidor de desarrollo de Django:
    ```bash
    python manage.py runserver
    ```
5. Instalar las dependencias del frontend:
    ```bash
    cd ../frontend
    npm install
    ```
6. Iniciar el servidor de desarrollo de React:
    ```bash
    npm run dev
    ```
7. Abrir el navegador y acceder a `http://localhost:3000` para ver la aplicación en funcionamiento.

