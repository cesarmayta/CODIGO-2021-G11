from django.contrib import admin

# Register your models here.
from .models import *
#admin.site.register(TblAlumno)
@admin.register(TblAlumno)
class AlumnoAdmin(admin.ModelAdmin):
    list_display = ('alumno_id','alumno_nombre','alumno_email')
    search_fields = ['alumno_nombre']
    list_editable = ('alumno_nombre','alumno_email')

admin.site.register(TblBootcamp)
admin.site.register(TblCurso)
admin.site.register(TblMatricula)
admin.site.register(TblMatriculaCurso)
admin.site.register(TblProfesor)
