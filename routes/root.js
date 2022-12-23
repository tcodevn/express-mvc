const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const chartController = require('../controllers/chartController');

router.get('^/$|/index(.html)?', homeController.getIndex);

router.get('chart', chartController.getIndex);

module.exports = router;