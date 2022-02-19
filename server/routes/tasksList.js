const router = require('express').Router();

const getAllTasksController = require('../controllers/getAllTasksController');
const createTaskController = require('../controllers/createTaskController');
const updateTaskController = require('../controllers/updateTaskController');
const deleteTaskController = require('../controllers/deleteTaskController');

router.get('/', getAllTasksController);
router.post('/', createTaskController);
router.put('/:id', updateTaskController);
router.delete('/:id', deleteTaskController);

module.exports = router;
