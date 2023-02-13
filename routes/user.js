const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controller');


router.route('/login')
.get(user_controller.login)
.post(user_controller.loginRequest);

router.route('/register')
.get(user_controller.register)
.post(user_controller.registerRequest);


module.exports = router;