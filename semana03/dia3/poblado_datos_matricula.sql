--POBLADO DE DATOS
insert into tbl_bootcamp(bootcamp_nombre) values ('DESARROLLO WEB');
insert into tbl_alumno(alumno_nombre,alumno_email)
VALUES
('DIEGO','diego@gmail.com'),
('EDER','eder@gmail.com');

insert into tbl_matricula(bootcamp_id,matricula_grupo,matricula_fecreg,alumno_id)
VALUES
(1,'G11','2021-09-01',1),
(1,'G12',CURRENT_DATE(),2);

insert into tbl_curso(curso_nombre) VALUES
('HTML Y CSS'),
('JAVASCRIPT'),
('REACT.JS'),
('PYTHON'),
('NODE.JS');

insert into tbl_profesor(profesor_nombre) VALUES
('SEBASTIAN YABIKU'),
('CESAR MAYTA'),
('DIEGO DE RIVERO');

insert into tbl_matricula_curso(matricula_id,profesor_id,curso_id)
VALUES
(1,1,1),
(1,1,1),
(1,1,2),
(1,1,3),
(1,2,4),
(1,2,5),
(2,1,1),
(2,1,2),
(2,1,3),
(2,3,4),
(2,3,5)