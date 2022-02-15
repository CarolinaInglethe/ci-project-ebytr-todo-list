const router = require('express').Router();

const getAllTasksController = require('../controllers/getAllTasksController');

router.get('/', getAllTasksController);

module.exports = router;
