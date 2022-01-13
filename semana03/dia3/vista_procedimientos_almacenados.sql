--vistas
CREATE VIEW vw_profesores_cursos AS
select tbl_profesor.profesor_nombre,tbl_curso.curso_nombre
from tbl_profesor 
LEFT JOIN tbl_matricula_curso ON tbl_profesor.profesor_id = tbl_matricula_curso.profesor_id
INNER JOIN tbl_curso ON tbl_matricula_curso.curso_id = tbl_curso.curso_id;

select * from vw_profesores_cursos where profesor_nombre = 'CESAR MAYTA';

--PROCEDIMIENTOS ALMACENADOS

DELIMITER //
CREATE PROCEDURE sp_cursosxalumno(IN id INT)
BEGIN
    select tbl_curso.curso_nombre
    from tbl_curso
    INNER JOIN tbl_matricula_curso ON tbl_curso.curso_id = tbl_matricula_curso.curso_id
    INNER JOIN tbl_matricula ON tbl_matricula_curso.matricula_id = tbl_matricula.matricula_id
    WHERE tbl_matricula.alumno_id = id;
END//
DELIMITER;
CALL sp_cursosxalumno(1);