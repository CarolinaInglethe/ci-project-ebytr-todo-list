const router = require('express').Router();

const getAllTasksController = require('../controllers/getAllTasksController');
const createTaskController = require('../controllers/createTaskController');
const updateTaskController = require('../controllers/updateTaskController');

router.get('/', getAllTasksController);
router.post('/', createTaskController);
router.put('/:name', updateTaskController);

module.exports = router;
