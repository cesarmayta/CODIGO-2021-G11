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

-- Volcando datos para la tabla db_matricula.tbl_alumno: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_alumno` DISABLE KEYS */;
INSERT INTO `tbl_alumno` (`alumno_id`, `alumno_nombre`, `alumno_email`) VALUES
	(1, 'DIEGO', 'diego@gmail.com'),
	(2, 'EDER', 'eder@gmail.com'),
	(3, 'JOSE LOPEZ', 'jose@gmail.com'),
	(4, 'ALDO RODRIGUEZ', 'aldorodriguez@codigo.edu.pe'),
	(6, 'CLAUDIA LINARES', 'claudialinares@codigo.edu.pe'),
	(7, 'LUIS LOPEZ', 'luislopez@codigo.edu.pe'),
	(8, 'GINO CARRANZA', 'ginocarranza@codigo.edu.pe'),
	(9, 'CARLOS PEREZ', 'carlosperez@codigo.edu.pe'),
	(13, 'LUIS LAURA', 'luislaura@codigo.edu.pe');
/*!40000 ALTER TABLE `tbl_alumno` ENABLE KEYS */;

-- Volcando datos para la tabla db_matricula.tbl_bootcamp: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_bootcamp` DISABLE KEYS */;
INSERT INTO `tbl_bootcamp` (`bootcamp_id`, `bootcamp_nombre`) VALUES
	(1, 'DESARROLLO WEB');
/*!40000 ALTER TABLE `tbl_bootcamp` ENABLE KEYS */;

-- Volcando datos para la tabla db_matricula.tbl_curso: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_curso` DISABLE KEYS */;
INSERT INTO `tbl_curso` (`curso_id`, `curso_nombre`) VALUES
	(1, 'HTML Y CSS'),
	(2, 'JAVASCRIPT'),
	(3, 'REACT.JS'),
	(4, 'PYTHON'),
	(5, 'NODE.JS'),
	(6, 'GO');
/*!40000 ALTER TABLE `tbl_curso` ENABLE KEYS */;

-- Volcando datos para la tabla db_matricula.tbl_matricula: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_matricula` DISABLE KEYS */;
INSERT INTO `tbl_matricula` (`matricula_id`, `matricula_grupo`, `matricula_fecreg`, `bootcamp_id`, `alumno_id`) VALUES
	(1, 'G11', '2021-09-01', 1, 1),
	(2, 'G12', '2022-01-12', 1, 2);
/*!40000 ALTER TABLE `tbl_matricula` ENABLE KEYS */;

-- Volcando datos para la tabla db_matricula.tbl_matricula_curso: ~11 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_matricula_curso` DISABLE KEYS */;
INSERT INTO `tbl_matricula_curso` (`matcur_id`, `matricula_id`, `profesor_id`, `curso_id`) VALUES
	(1, 1, 1, 1),
	(2, 1, 1, 1),
	(3, 1, 1, 2),
	(4, 1, 1, 3),
	(5, 1, 2, 4),
	(6, 1, 2, 5),
	(7, 2, 1, 1),
	(8, 2, 1, 2),
	(9, 2, 1, 3),
	(10, 2, 3, 4),
	(11, 2, 3, 5);
/*!40000 ALTER TABLE `tbl_matricula_curso` ENABLE KEYS */;

-- Volcando datos para la tabla db_matricula.tbl_profesor: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `tbl_profesor` DISABLE KEYS */;
INSERT INTO `tbl_profesor` (`profesor_id`, `profesor_nombre`) VALUES
	(1, 'SEBASTIAN YABIKU'),
	(2, 'CESAR MAYTA'),
	(3, 'DIEGO DE RIVERO'),
	(4, 'JORGE GARNICA');
/*!40000 ALTER TABLE `tbl_profesor` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
