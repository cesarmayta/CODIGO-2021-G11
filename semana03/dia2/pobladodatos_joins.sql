ALTER TABLE cliente AUTO_INCREMENT=1;
insert into cliente(nombre,email,pais) 
values('CESAR MAYTA','cesarmayta@gmail.com','Perú');
select * from cliente;
insert into usuario(cliente_id,nombre,clave) values(1,'cmayta','codigo2021');
insert into cliente(nombre,email,pais) 
values('asdf','cesarmaytaasdf@gmail.com','as');
delete from cliente where id=2;

insert into computadora(marca,modelo,procesador,ram)
values('DELL','INSPIRON','INTEL CORE I7','16 GB');

insert into computadora(marca,modelo,procesador,ram)
values('APPLE','MACBOOK PRO','M1','8 GB');

select * from computadora;

insert into venta(cliente_id,fecha) values(1,CURRENT_DATE());
select * from venta;
insert into venta_detalle(venta_id,computadora_id,precio,cantidad)
values(1,1,5000,1);
insert into venta_detalle(venta_id,computadora_id,precio,cantidad)
values(1,2,10000,1);

select * from venta_detalle;
select venta_detalle.*,computadora.*
from venta_detalle JOIN computadora;

select
venta.fecha,cliente.nombre,cliente.email,
computadora.marca,computadora.modelo,
venta_detalle.cantidad,venta_detalle.precio
from venta_detalle
INNER JOIN computadora ON venta_detalle.computadora_id = computadora.id
INNER JOIN venta ON venta_detalle.venta_id = venta.id
INNER JOIN cliente ON venta.cliente_id = cliente.id