PASOS PARA DJANGO
1 - CREAR Y ACTIVAR ENTORNO VIRTUAL
python -m venv venv
source venv/Scripts/activate

2 - instalar django y otras dependencias
pip install django==3.2 djangorestframework

3 - CREAR PROYECTO Y APP
django-admin startproject pos_backend
cd pos_backend
python manage.py startapp api

