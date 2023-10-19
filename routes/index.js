var express = require('express');
var router = express.Router();
var catchError = require('../Ultilities/CatchError');
var todoListController = require('../Controllers/todoListController');
/* GET home page. */

router.route('/getAllTask').get(catchError(todoListController.getAllTask))
router.route('/createTask').post(catchError(todoListController.createTasks))
router.route('/updateStateTask/:id').put(catchError(todoListController.updateStateTask))
router.route('/deleteTaskByTitle').delete(catchError(todoListController.deleteTaskByTitle))

module.exports = router;
