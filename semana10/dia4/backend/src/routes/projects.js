const {Router} = require('express');
const router = Router();

const { getAll,create,update,delProject } = require('../controllers/project.controller');

router.get('/',getAll);
router.post('/',create);
router.put('/:id',update);
router.delete('/:id',delProject);

module.exports = router;

