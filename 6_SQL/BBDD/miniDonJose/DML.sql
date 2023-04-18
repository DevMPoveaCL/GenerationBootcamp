-- Inserta datos (poblar tablas)
-- Tabla producto
INSERT INTO minimarketdj_schema.producto (nombre, precio, stock, tipoProducto) VALUES ('Pasta dental', 990 , 30,'Higiene Personal');
INSERT INTO minimarketdj_schema.producto (nombre, precio, stock, tipoProducto) VALUES ('Fideos', 790 , 40,'Alimentos');
INSERT INTO minimarketdj_schema.producto (nombre, precio, stock, tipoProducto) VALUES ('Cartulina', 200 , 20,'Papeleria');
INSERT INTO minimarketdj_schema.producto (nombre, precio, stock, tipoProducto) VALUES ('Energetica Monster', 1500 , 35,'Bebestibles');
INSERT INTO minimarketdj_schema.producto (nombre, precio, stock, tipoProducto) VALUES ('Energetica Redbull', 1500 , 25,'Bebestibles');
INSERT INTO minimarketdj_schema.producto (nombre, precio, stock, tipoProducto) VALUES ('Coca-cola lata 250ml', 990 , 40,'Bebestibles');
INSERT INTO minimarketdj_schema.producto (nombre, precio, stock, tipoProducto) VALUES ('Coca-cola 3 litros', 3500 , 40,'Bebestibles');

-- Tabla proveedor
INSERT INTO minimarketdj_schema.proveedor (rut, nombre, direccion, telefono, email) VALUES ('76740317-8', 'Alimentos Spa' , 'Miraflores 332',224698686,'contacto@alimentosspa.cl');
INSERT INTO minimarketdj_schema.proveedor (rut, nombre, direccion, telefono, email) VALUES ('77643783-2', 'higienePersonal Spa' , 'Huerfanos 332',224656893,'contacto@higienepersonal.cl');
INSERT INTO minimarketdj_schema.proveedor (rut, nombre, direccion, telefono, email) VALUES ('77470107-9', 'Papeleria Spa' , 'Merced 332',224563225,'contacto@papeleriaspa.cl');
INSERT INTO minimarketdj_schema.proveedor (rut, nombre, direccion, telefono, email) VALUES ('76157584-8', 'Bebestibles Spa' , 'Enrique Maquiver 332',224667877,'contacto@bebestiblesspa.cl');
INSERT INTO minimarketdj_schema.proveedor (rut, nombre, direccion, telefono, email) VALUES ('76277117-9', 'Energy Spa' , 'Santo Domingo 887',224222425,'contacto@Energyspa.cl');
INSERT INTO minimarketdj_schema.proveedor (rut, nombre, direccion, telefono, email) VALUES ('77418364-7', 'Allmarket Spa' , 'San Antonio 888',223333536,'contacto@allmarketspa.cl');
INSERT INTO minimarketdj_schema.proveedor (rut, nombre, direccion, telefono, email) VALUES ('77522344-8', 'TresB Spa' , 'Mapocho 4676',224958473,'contacto@tresbspa.cl');

-- Tabla cliente
INSERT INTO minimarketdj_schema.cliente (nombre, rut) VALUES ('Juanito Perez', '14921487-9');
INSERT INTO minimarketdj_schema.cliente (nombre, rut) VALUES ('Belen Perez', '12463596-9');
INSERT INTO minimarketdj_schema.cliente (nombre, rut) VALUES ('Fernando Gatica', '15482752-8');
INSERT INTO minimarketdj_schema.cliente (nombre, rut) VALUES ('Luis Rojas', '18494864-8');
INSERT INTO minimarketdj_schema.cliente (nombre, rut) VALUES ('Hector Rodriguez', '17115981-4');
INSERT INTO minimarketdj_schema.cliente (nombre, rut) VALUES ('Laura Perez', '17889092-1');
INSERT INTO minimarketdj_schema.cliente (nombre, rut) VALUES ('Pamela Garcia', '19840398-9');

-- Tabla boleta (ingreso manual de ventas)
INSERT INTO minimarketdj_schema.boleta (nombre, total, fecha, cliente_id, producto_id) VALUES ('Minimarket Don Jose', '1500' , '2022-11-11',1,4);
INSERT INTO minimarketdj_schema.boleta (nombre, total, fecha, cliente_id, producto_id) VALUES ('Minimarket Don Jose', '1500' , '2022-11-11',1,5);
INSERT INTO minimarketdj_schema.boleta (nombre, total, fecha, cliente_id, producto_id) VALUES ('Minimarket Don Jose', '1500' , '2022-11-11',1,4);

-- Muestra la tablas recien pobladas de nuesta bbdd 
-- Tabla producto
select * from minimarketdj_schema.producto;

-- Tabla proveedor
select * from minimarketdj_schema.proveedor;

-- Tabla cliente
select * from minimarketdj_schema.cliente;

-- Tabla boleta
select * from minimarketdj_schema.boleta;

-- Sentencias Join
-- Unir tabla cliente con boleta y producto (Necesidad: ver en una tabla, cliente_id, producto y datos requeridos en la tabla boleta a fin de poblarla con todos los datos previamente creados a la vista). 
select * from minimarketdj_schema.boleta inner join minimarketdj_schema.cliente on boleta.boleta_id=cliente.cliente_id inner join minimarketdj_schema.producto on boleta.producto_id=producto.producto_id where cliente.cliente_id>=1;