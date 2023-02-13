const express = require('express');
const router = express.Router();

// User router
router.use('/user',require('./user'));

module.exports = router;