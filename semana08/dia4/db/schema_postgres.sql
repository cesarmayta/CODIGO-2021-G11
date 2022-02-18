create SEQUENCE seq_alumno
    start with 1
    increment by 1
    maxvalue 999999
    minvalue 1;

create table public.tbl_alumno(
    alumno_id INT NOT NULL PRIMARY KEY default(nextval('seq_alumno')),
    alumno_nombre VARCHAR(100) NOT NULL,
    alumno_email VARCHAR(100)
);

insert into public.tbl_alumno(alumno_nombre,alumno_email) values('CESAR MAYTA','cesarmayta@gmail.com');