-- MySQL Script generated by MySQL Workbench
-- Wed Jan 12 21:14:22 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_matricula
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_matricula
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_matricula` DEFAULT CHARACTER SET utf8 ;
USE `db_matricula` ;

-- -----------------------------------------------------
-- Table `db_matricula`.`tbl_bootcamp`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_matricula`.`tbl_bootcamp` ;

CREATE TABLE IF NOT EXISTS `db_matricula`.`tbl_bootcamp` (
  `bootcamp_id` INT(11) NOT NULL AUTO_INCREMENT,
  `bootcamp_nombre` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`bootcamp_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_matricula`.`tbl_alumno`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_matricula`.`tbl_alumno` ;

CREATE TABLE IF NOT EXISTS `db_matricula`.`tbl_alumno` (
  `alumno_id` INT(11) NOT NULL AUTO_INCREMENT,
  `alumno_nombre` VARCHAR(255) NOT NULL,
  `alumno_email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`alumno_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_matricula`.`tbl_matricula`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_matricula`.`tbl_matricula` ;

CREATE TABLE IF NOT EXISTS `db_matricula`.`tbl_matricula` (
  `matricula_id` INT(11) NOT NULL AUTO_INCREMENT,
  `matricula_grupo` VARCHAR(3) NOT NULL,
  `matricula_fecreg` DATE NULL COMMENT 'fecha de registro',
  `bootcamp_id` INT(11) NOT NULL,
  `alumno_id` INT(11) NOT NULL,
  PRIMARY KEY (`matricula_id`),
  CONSTRAINT `fk_tbl_matricula_tbl_bootcamp`
    FOREIGN KEY (`bootcamp_id`)
    REFERENCES `db_matricula`.`tbl_bootcamp` (`bootcamp_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_matricula_tbl_alumno1`
    FOREIGN KEY (`alumno_id`)
    REFERENCES `db_matricula`.`tbl_alumno` (`alumno_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_matricula`.`tbl_curso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_matricula`.`tbl_curso` ;

CREATE TABLE IF NOT EXISTS `db_matricula`.`tbl_curso` (
  `curso_id` INT(11) NOT NULL AUTO_INCREMENT,
  `curso_nombre` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`curso_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_matricula`.`tbl_profesor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_matricula`.`tbl_profesor` ;

CREATE TABLE IF NOT EXISTS `db_matricula`.`tbl_profesor` (
  `profesor_id` INT(11) NOT NULL AUTO_INCREMENT,
  `profesor_nombre` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`profesor_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_matricula`.`tbl_matricula_curso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_matricula`.`tbl_matricula_curso` ;

CREATE TABLE IF NOT EXISTS `db_matricula`.`tbl_matricula_curso` (
  `matcur_id` INT NOT NULL AUTO_INCREMENT,
  `matricula_id` INT(11) NOT NULL,
  `profesor_id` INT(11) NOT NULL,
  `curso_id` INT(11) NOT NULL,
  PRIMARY KEY (`matcur_id`),
  CONSTRAINT `fk_tbl_matricula_curso_tbl_matricula1`
    FOREIGN KEY (`matricula_id`)
    REFERENCES `db_matricula`.`tbl_matricula` (`matricula_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_matricula_curso_tbl_profesor1`
    FOREIGN KEY (`profesor_id`)
    REFERENCES `db_matricula`.`tbl_profesor` (`profesor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_matricula_curso_tbl_curso1`
    FOREIGN KEY (`curso_id`)
    REFERENCES `db_matricula`.`tbl_curso` (`curso_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
