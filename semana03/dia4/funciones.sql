--FUNCIONES
DELIMITER $$
CREATE FUNCTION fn_contar_cursos(id INT(11))
    RETURNS INT UNSIGNED
BEGIN
    DECLARE total INT UNSIGNED;

    select count(*) into total
    from tbl_matricula_curso
    where profesor_id = id;

    RETURN total;
END
$$

DELIMITER ;
select fn_contar_cursos(3);
select profesor_nombre,fn_contar_cursos(profesor_id)
from tbl_profesor;

CREATE TEMPORARY TABLE tmp_profesores_cursos
as (select profesor_nombre,fn_contar_cursos(profesor_id)
from tbl_profesor);

select * from tmp_profesores_cursos;

select count(*) 
from 
tbl_matricula_curso mc INNER JOIN tbl_matricula m ON mc.matricula_id = m.matricula_id
WHERE m.alumno_id = 1;

DELIMITER $$

CREATE FUNCTION fn_contar_alumno_cursos(intIdAlumno INT(11))
    RETURNS INT UNSIGNED
BEGIN
    DECLARE totalCursos INT UNSIGNED;

    SET totalCursos = (
        select count(*) 
        from 
        tbl_matricula_curso mc INNER JOIN tbl_matricula m ON mc.matricula_id = m.matricula_id
        WHERE m.alumno_id = intIdAlumno
    );

    RETURN totalCursos;
END
$$

DELIMITER ;

select alumno_id,alumno_nombre,fn_contar_alumno_cursos(alumno_id)
from tbl_alumno;
