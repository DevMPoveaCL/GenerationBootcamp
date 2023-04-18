-- Crea el esquema BBDD (en caso de que no exista)
CREATE SCHEMA IF NOT EXISTS minimarketdj_schema;


-- Creacion de tablas
CREATE TABLE `minimarketdj_schema`.`proveedor`(
`proveedor_id` bigint NOT NULL AUTO_INCREMENT,
`rut`  VARCHAR(10) NOT NULL,
`nombre`  VARCHAR(20) NOT NULL,
`direccion`  VARCHAR(40) NOT NULL,
`telefono` INT NOT NULL,
`email` VARCHAR(40) NOT NULL,
PRIMARY KEY (`proveedor_id`));

CREATE TABLE `minimarketdj_schema`.`proveedor_producto`(
`proveedor_producto_id` bigint NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`proveedor_producto_id`));

CREATE TABLE `minimarketdj_schema`.`producto`(
`producto_id` bigint NOT NULL AUTO_INCREMENT,
`nombre`  VARCHAR(20) NOT NULL,
`precio` bigint NOT NULL,
`stock` int NOT NULL,
`tipoProducto`  VARCHAR(20) NOT NULL,
PRIMARY KEY (`producto_id`));

CREATE TABLE `minimarketdj_schema`.`cliente`(
`cliente_id` bigint NOT NULL AUTO_INCREMENT,
`nombre`  VARCHAR(20) NOT NULL,
`rut`  VARCHAR(10) NOT NULL,
PRIMARY KEY (`cliente_id`));

CREATE TABLE `minimarketdj_schema`.`boleta`(
`boleta_id` bigint NOT NULL AUTO_INCREMENT,
`nombre`  VARCHAR(20) NOT NULL,
`total` bigint NOT NULL,
`fecha` DATE NOT NULL,
PRIMARY KEY (`boleta_id`));

CREATE TABLE `minimarketdj_schema`.`venta`(
`venta_id` bigint NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`venta_id`));

CREATE TABLE `minimarketdj_schema`.`historial`(
`historial_id` bigint NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`historial_id`));

CREATE TABLE `minimarketdj_schema`.`compra`(
`compra_id` bigint NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`compra_id`));


-- Creacion y asignacion de llaves foraneas para cada tabla
-- Tabla Producto
ALTER TABLE minimarketdj_schema.proveedor_producto ADD proveedor_id bigint NOT NULL;
ALTER TABLE minimarketdj_schema.proveedor_producto ADD producto_id bigint NOT NULL;
ALTER TABLE minimarketdj_schema.proveedor_producto ADD CONSTRAINT proveedorProducto FOREIGN KEY (proveedor_id) REFERENCES minimarketdj_schema.proveedor(proveedor_id);
ALTER TABLE minimarketdj_schema.proveedor_producto ADD CONSTRAINT productoProveedor FOREIGN KEY (producto_id) REFERENCES minimarketdj_schema.producto(producto_id);

-- Tabla boleta
ALTER TABLE minimarketdj_schema.boleta ADD cliente_id bigint NOT NULL;
ALTER TABLE minimarketdj_schema.boleta ADD producto_id bigint NOT NULL;
ALTER TABLE minimarketdj_schema.boleta ADD CONSTRAINT clienteBoleta FOREIGN KEY (cliente_id) REFERENCES minimarketdj_schema.cliente(cliente_id);
ALTER TABLE minimarketdj_schema.boleta ADD CONSTRAINT productoBoleta FOREIGN KEY (producto_id) REFERENCES minimarketdj_schema.producto(producto_id);

-- Tabla venta
ALTER TABLE minimarketdj_schema.venta ADD boleta_id bigint NOT NULL;
ALTER TABLE minimarketdj_schema.venta ADD CONSTRAINT ventaBoleta FOREIGN KEY (boleta_id) REFERENCES minimarketdj_schema.boleta(boleta_id);

-- Tabla historial
ALTER TABLE minimarketdj_schema.historial ADD boleta_id bigint NOT NULL;
ALTER TABLE minimarketdj_schema.historial ADD CONSTRAINT historialBoleta FOREIGN KEY (boleta_id) REFERENCES minimarketdj_schema.boleta(boleta_id);

-- Tabla compra
ALTER TABLE minimarketdj_schema.compra ADD boleta_id bigint NOT NULL;
ALTER TABLE minimarketdj_schema.compra ADD CONSTRAINT compraBoleta FOREIGN KEY (boleta_id) REFERENCES minimarketdj_schema.boleta(boleta_id);
