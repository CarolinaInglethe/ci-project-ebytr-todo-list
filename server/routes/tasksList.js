const router = require('express').Router();

const getAllTasksController = require('../controllers/getAllTasksController');
const createTaskController = require('../controllers/createTaskController');

router.get('/', getAllTasksController);
router.post('/', createTaskController);

module.exports = router;
