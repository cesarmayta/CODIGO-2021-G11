const  { Router } = require('express');
const router = Router();

const {getAll,create,getById} = require('../controllers/alumnos');

router.route('/')
    .get(getAll)
    .post(create)

router.route('/:id')
    .get(getById)

module.exports = router;