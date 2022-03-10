-- MySQL Script generated by MySQL Workbench
-- Tue Nov  2 20:53:20 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering
CREATE TABLE IF NOT EXISTS `tbl_usuario` (
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `usuario_nom` varchar(255) DEFAULT NULL,
  `usuario_pas` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8
-- -----------------------------------------------------
-- Table `tbl_categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbl_categoria` (
  `categoria_id` INT NOT NULL AUTO_INCREMENT,
  `categoria_nom` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`categoria_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tbl_plato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbl_plato` (
  `plato_id` INT NOT NULL AUTO_INCREMENT,
  `plato_nom` VARCHAR(200) NOT NULL,
  `plato_img` VARCHAR(200) NULL,
  `plato_pre` DOUBLE NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`plato_id`),
  CONSTRAINT `fk_tbl_plato_tbl_categoria`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `tbl_categoria` (`categoria_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tbl_mesa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbl_mesa` (
  `mesa_id` INT NOT NULL AUTO_INCREMENT,
  `mesa_nro` VARCHAR(3) NOT NULL,
  `mesa_cap` INT NULL DEFAULT 1 COMMENT 'capacidad de la mesa',
  PRIMARY KEY (`mesa_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tbl_cargo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbl_cargo` (
  `cargo_id` INT NOT NULL AUTO_INCREMENT,
  `cargo_nom` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`cargo_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tbl_empleado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbl_empleado` (
  `empleado_id` INT NOT NULL AUTO_INCREMENT,
  `empleado_nom` VARCHAR(200) NOT NULL,
  `cargo_id` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`empleado_id`),
  CONSTRAINT `fk_tbl_empleado_tbl_cargo1`
    FOREIGN KEY (`cargo_id`)
    REFERENCES `tbl_cargo` (`cargo_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tbl_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbl_pedido` (
  `pedido_id` INT NOT NULL AUTO_INCREMENT,
  `pedido_fech` DATETIME NULL,
  `pedido_nro` VARCHAR(200) NULL,
  `pedido_est` VARCHAR(100) NULL,
  `mesa_id` INT NOT NULL,
  `empleado_id` INT NOT NULL,
  PRIMARY KEY (`pedido_id`),
  CONSTRAINT `fk_tbl_pedido_tbl_mesa1`
    FOREIGN KEY (`mesa_id`)
    REFERENCES `tbl_mesa` (`mesa_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_pedido_tbl_empleado1`
    FOREIGN KEY (`empleado_id`)
    REFERENCES `tbl_empleado` (`empleado_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tbl_pedido_plato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tbl_pedido_plato` (
  `pedido_plato_id` INT NOT NULL AUTO_INCREMENT,
  `pedido_plato_can` INT NOT NULL,
  `pedido_plato_pre` DOUBLE NULL,
  `pedido_plato_pedido_id` INT NOT NULL,
  `pedido_plato_plato_id` INT NOT NULL,
  PRIMARY KEY (`pedido_plato_id`),
  CONSTRAINT `fk_tbl_pedido_plato_tbl_pedido1`
    FOREIGN KEY (`pedido_plato_pedido_id`)
    REFERENCES `tbl_pedido` (`pedido_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_pedido_plato_tbl_plato1`
    FOREIGN KEY (`pedido_plato_plato_id`)
    REFERENCES `tbl_plato` (`plato_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
