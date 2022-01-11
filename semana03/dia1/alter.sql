ALTER TABLE CLIENTE
ADD COLUMN pais varchar(200) after nombre;

alter table cliente 
modify column id int auto_increment;

 alter table cliente add column estado char(1) default '1' not null;