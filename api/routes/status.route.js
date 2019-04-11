const router     = require('express').Router();
const controller = require('../controllers/status.controller');

router.get ('/', controller.status);

module.exports = router;