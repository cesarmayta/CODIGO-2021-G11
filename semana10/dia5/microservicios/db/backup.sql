-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.33 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para db_sistemapos
CREATE DATABASE IF NOT EXISTS `db_sistemapos` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `db_sistemapos`;

-- Volcando estructura para procedimiento db_sistemapos.obtenerCategoriaPorId
DELIMITER //
CREATE PROCEDURE `obtenerCategoriaPorId`(IN catId INT)
BEGIN
    SELECT * FROM tbl_categoria where categoria_id = catId;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_sistemapos.obtenerCategorias
DELIMITER //
CREATE PROCEDURE `obtenerCategorias`()
BEGIN
    SELECT * FROM tbl_categoria;
END//
DELIMITER ;

-- Volcando estructura para procedimiento db_sistemapos.obtenerPlatosPorCategoriaId
DELIMITER //
CREATE PROCEDURE `obtenerPlatosPorCategoriaId`(IN catId INT)
BEGIN
    SELECT * FROM tbl_plato where categoria_id = catId;
END//
DELIMITER ;

-- Volcando estructura para tabla db_sistemapos.tbl_cargo
CREATE TABLE IF NOT EXISTS `tbl_cargo` (
  `cargo_id` int(11) NOT NULL AUTO_INCREMENT,
  `cargo_nom` varchar(200) NOT NULL,
  PRIMARY KEY (`cargo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_sistemapos.tbl_cargo: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_cargo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_cargo` ENABLE KEYS */;

-- Volcando estructura para tabla db_sistemapos.tbl_categoria
CREATE TABLE IF NOT EXISTS `tbl_categoria` (
  `categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria_nom` varchar(200) NOT NULL,
  PRIMARY KEY (`categoria_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_sistemapos.tbl_categoria: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_categoria` ENABLE KEYS */;

-- Volcando estructura para tabla db_sistemapos.tbl_empleado
CREATE TABLE IF NOT EXISTS `tbl_empleado` (
  `empleado_id` int(11) NOT NULL AUTO_INCREMENT,
  `empleado_nom` varchar(200) NOT NULL,
  `cargo_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`empleado_id`),
  KEY `fk_tbl_empleado_tbl_cargo1` (`cargo_id`),
  CONSTRAINT `fk_tbl_empleado_tbl_cargo1` FOREIGN KEY (`cargo_id`) REFERENCES `tbl_cargo` (`cargo_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_sistemapos.tbl_empleado: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_empleado` ENABLE KEYS */;

-- Volcando estructura para tabla db_sistemapos.tbl_mesa
CREATE TABLE IF NOT EXISTS `tbl_mesa` (
  `mesa_id` int(11) NOT NULL AUTO_INCREMENT,
  `mesa_nro` varchar(3) NOT NULL,
  `mesa_cap` int(11) DEFAULT '1' COMMENT 'capacidad de la mesa',
  PRIMARY KEY (`mesa_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_sistemapos.tbl_mesa: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_mesa` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_mesa` ENABLE KEYS */;

-- Volcando estructura para tabla db_sistemapos.tbl_pedido
CREATE TABLE IF NOT EXISTS `tbl_pedido` (
  `pedido_id` int(11) NOT NULL AUTO_INCREMENT,
  `pedido_fech` datetime DEFAULT NULL,
  `pedido_nro` varchar(200) DEFAULT NULL,
  `pedido_est` varchar(100) DEFAULT NULL,
  `mesa_id` int(11) NOT NULL,
  `empleado_id` int(11) NOT NULL,
  PRIMARY KEY (`pedido_id`),
  KEY `fk_tbl_pedido_tbl_mesa1` (`mesa_id`),
  KEY `fk_tbl_pedido_tbl_empleado1` (`empleado_id`),
  CONSTRAINT `fk_tbl_pedido_tbl_empleado1` FOREIGN KEY (`empleado_id`) REFERENCES `tbl_empleado` (`empleado_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_pedido_tbl_mesa1` FOREIGN KEY (`mesa_id`) REFERENCES `tbl_mesa` (`mesa_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_sistemapos.tbl_pedido: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_pedido` ENABLE KEYS */;

-- Volcando estructura para tabla db_sistemapos.tbl_pedido_plato
CREATE TABLE IF NOT EXISTS `tbl_pedido_plato` (
  `pedido_plato_id` int(11) NOT NULL AUTO_INCREMENT,
  `pedido_plato_can` int(11) NOT NULL,
  `pedido_plato_pre` double DEFAULT NULL,
  `pedido_plato_pedido_id` int(11) NOT NULL,
  `pedido_plato_plato_id` int(11) NOT NULL,
  PRIMARY KEY (`pedido_plato_id`),
  KEY `fk_tbl_pedido_plato_tbl_pedido1` (`pedido_plato_pedido_id`),
  KEY `fk_tbl_pedido_plato_tbl_plato1` (`pedido_plato_plato_id`),
  CONSTRAINT `fk_tbl_pedido_plato_tbl_pedido1` FOREIGN KEY (`pedido_plato_pedido_id`) REFERENCES `tbl_pedido` (`pedido_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_pedido_plato_tbl_plato1` FOREIGN KEY (`pedido_plato_plato_id`) REFERENCES `tbl_plato` (`plato_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_sistemapos.tbl_pedido_plato: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_pedido_plato` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_pedido_plato` ENABLE KEYS */;

-- Volcando estructura para tabla db_sistemapos.tbl_plato
CREATE TABLE IF NOT EXISTS `tbl_plato` (
  `plato_id` int(11) NOT NULL AUTO_INCREMENT,
  `plato_nom` varchar(200) NOT NULL,
  `plato_img` varchar(200) DEFAULT NULL,
  `plato_pre` double DEFAULT NULL,
  `categoria_id` int(11) NOT NULL,
  PRIMARY KEY (`plato_id`),
  KEY `fk_tbl_plato_tbl_categoria` (`categoria_id`),
  CONSTRAINT `fk_tbl_plato_tbl_categoria` FOREIGN KEY (`categoria_id`) REFERENCES `tbl_categoria` (`categoria_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla db_sistemapos.tbl_plato: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_plato` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_plato` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
