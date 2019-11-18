const router = require('express').Router();
const adminController = require('./../../controllers/AdminController/contollerLogin');

router.get('/admin',adminController.getLogin);

router.post('/admin',adminController.loginRequest);

router.get('/admin/Todo-Logs',adminController.todoLogs);

module.exports = router;