select * from tbl_profesor;
DELIMITER $$

CREATE PROCEDURE listar_profesores()
BEGIN
    SELECT * FROM tbl_profesor;
END
$$

DELIMITER ;

CALL listar_profesores();

--CREAR PROCEDIMIENTO PARA DETERMINAR LA CANTIDAD DE CURSOS QUE ESTA DICTANDO UN PROFESOR
DELIMITER //

DROP PROCEDURE IF EXISTS contar_cursos_profesor
//
CREATE PROCEDURE contar_cursos_profesor(IN nombre VARCHAR(200),OUT total INT UNSIGNED)
BEGIN
   SET total = (select count(*) from 
    tbl_matricula_curso c INNER JOIN tbl_profesor p 
    ON c.profesor_id = p.profesor_id
    WHERE p.profesor_nombre = nombre);
END
//
DELIMITER ;

set @nombre = 'CESAR MAYTA';
CALL contar_cursos_profesor(@nombre,@total);
SELECT @total;
select @nombre;

-- EJEMPLO BUCLES EN PROCEDIMIENTOS ALMACENADOS
DELIMITER $$
CREATE PROCEDURE ejemplo_bucle(IN tope INT,OUT suma INT UNSIGNED)
BEGIN
    DECLARE contador INT;
    SET contador = 1;
    SET suma = 0;

    bucle: LOOP
        IF contador > tope THEN
            LEAVE bucle;
        END IF;

        SET suma = suma + contador;
        SET contador = contador + 1;
    END LOOP;
END
$$

DELIMITER ;

CALL ejemplo_bucle(10,@resultado);
select @resultado;

select count(*) from 
tbl_matricula_curso c INNER JOIN tbl_profesor p 
ON c.profesor_id = p.profesor_id
WHERE p.profesor_nombre = 'CESAR MAYTA';
    