const  { Router } = require('express');
const router = Router();

const {getAll,create,login} = require('../controllers/usuarios');

router.route('/')
    .get(getAll)
    .post(create)

router.route('/login')
    .post(login)

module.exports = router;