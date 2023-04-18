INSERT INTO testin_schema.cliente (nombre, direccion, rut, telefono, email)
VALUES ('Nico', 'muy legos 123', '17.619.508-8', '123456889', 'consu@gmail.com');

INSERT INTO testin_schema.cliente (cliente_id, nombre, direccion, rut, telefono, email)
VALUES (2, 'Consu', 'muy legos 123', '17.619.508-8', '123456789', 'consu@gmail.com')
ON duplicate key update direccion = 'muy muy lejano';

UPDATE testin_schema.cliente
SET nombre='Consu2'
WHERE nombre = 'Consu';

SET SQL_SAFE_UPDATES = 0;

-- elimina una fila utilizando dos parámetros
delete from generation_schema.articulo where nombre= 'Audifonos inalam' and articulo_id = 13;
DELETE FROM testin_schema.cliente
WHERE cliente_id=4;

select * from testin_schema.cliente;
#XOR uso
select nombre, rut from testin_schema.cliente where cliente_id=2 xor telefono=123456889;
