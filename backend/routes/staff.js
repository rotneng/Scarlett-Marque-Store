const express = require('express');
const router = express.Router();
const { getStaff } = require('../controllers/staffController');

router.get('/all', getStaff);

module.exports = router;