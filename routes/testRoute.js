const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController')

router.get('/test', testController.teste);

module.exports = router;