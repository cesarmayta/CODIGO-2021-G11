# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class TblAlumno(models.Model):
    alumno_id = models.AutoField(primary_key=True,verbose_name='id')
    alumno_nombre = models.CharField(max_length=255,verbose_name='nombre')
    alumno_email = models.CharField(max_length=255,verbose_name='email')

    class Meta:
        managed = False
        db_table = 'tbl_alumno'
        verbose_name = 'Alumno'
        
    def __str__(self):
        return self.alumno_nombre


class TblBootcamp(models.Model):
    bootcamp_id = models.AutoField(primary_key=True)
    bootcamp_nombre = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'tbl_bootcamp'


class TblCurso(models.Model):
    curso_id = models.AutoField(primary_key=True)
    curso_nombre = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'tbl_curso'


class TblMatricula(models.Model):
    matricula_id = models.AutoField(primary_key=True)
    matricula_grupo = models.CharField(max_length=3)
    matricula_fecreg = models.DateField(blank=True, null=True)
    bootcamp = models.ForeignKey(TblBootcamp, models.DO_NOTHING)
    alumno = models.ForeignKey(TblAlumno, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_matricula'


class TblMatriculaCurso(models.Model):
    matcur_id = models.AutoField(primary_key=True)
    matricula = models.ForeignKey(TblMatricula, models.DO_NOTHING)
    profesor = models.ForeignKey('TblProfesor', models.DO_NOTHING)
    curso = models.ForeignKey(TblCurso, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_matricula_curso'


class TblProfesor(models.Model):
    profesor_id = models.AutoField(primary_key=True)
    profesor_nombre = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'tbl_profesor'
