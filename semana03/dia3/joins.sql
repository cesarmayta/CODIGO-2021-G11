--INNER JOIN
select
tbl_matricula.matricula_grupo,
tbl_alumno.alumno_nombre
FROM
tbl_matricula INNER JOIN tbl_alumno
ON tbl_matricula.alumno_id = tbl_alumno.alumno_id;

insert into tbl_alumno(alumno_nombre,alumno_email) values('JOSE LOPEZ','jose@gmail.com');

select tbl_alumno.alumno_nombre
,tbl_matricula.matricula_grupo
FROM
tbl_alumno LEFT JOIN tbl_matricula ON tbl_alumno.alumno_id = tbl_matricula.alumno_id;

insert into tbl_curso(curso_nombre) VALUES('GO');

select tbl_profesor.profesor_nombre,tbl_curso.curso_nombre
FROM tbl_profesor
INNER JOIN tbl_matricula_curso ON tbl_profesor.profesor_id = tbl_matricula_curso.profesor_id
RIGHT JOIN tbl_curso ON tbl_matricula_curso.curso_id = tbl_curso.curso_id
;

--CONSULTA CUANTOS CURSOS DICTA CADA PROFESOR
select tbl_profesor.profesor_nombre,count(tbl_matricula_curso.curso_id)
from 
tbl_profesor LEFT JOIN tbl_matricula_curso
ON tbl_profesor.profesor_id = tbl_matricula_curso.profesor_id
GROUP BY tbl_profesor.profesor_nombre;

insert into tbl_profesor(profesor_nombre) values ('JORGE GARNICA');