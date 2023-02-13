const express = require('express');
const router = express.Router();
const home_controller = require('../controllers/home_controller');
console.log('Router loaded')


router.get('/',home_controller.home);

// User router
router.use('/user',require('./user'));

module.exports = router;