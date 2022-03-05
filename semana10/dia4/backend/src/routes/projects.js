const {Router} = require('express');
const router = Router();

const { getAll } = require('../controllers/project.controller');

router.get('/',getAll);

module.exports = router;

