CREATE TABLE IF NOT EXISTS  `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `pais` varchar(200) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `estado` char(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS usuario(
    id INT(11) NOT NULL AUTO_INCREMENT,
    cliente_id INT(11) UNIQUE,
    nombre VARCHAR(255) NOT NULL,
    clave VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(cliente_id) REFERENCES cliente(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `computadora` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(255) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `modelo` varchar(100) DEFAULT NULL,
  `ram` varchar(200) DEFAULT NULL,
  `arquitectura` varchar(100) DEFAULT NULL,
  `monitor` varchar(100) DEFAULT NULL,
  `sistema_operativo` varchar(100) DEFAULT NULL,
  `procesador` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS venta(
    id INT(11) NOT NULL AUTO_INCREMENT,
    cliente_id INT(11) NOT NULL,
    fecha DATE,
    PRIMARY KEY(id),
    FOREIGN KEY(cliente_id) REFERENCES cliente(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS venta_detalle(
    id INT(11) NOT NULL AUTO_INCREMENT,
    computadora_id INT(11) NOT NULL,
    cantidad INT(5) NOT NULL,
    precio DOUBLE,
    venta_id INT(11) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(computadora_id) REFERENCES computadora(id),
    FOREIGN KEY(venta_id) REFERENCES venta(id)
)ENGINE=InnoDB;