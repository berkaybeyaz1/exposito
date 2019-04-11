const router     = require('express').Router();
const controller = require('../controllers/mail.controller');

router.post ('/test', controller.test);
router.post ('/send', controller.send);

module.exports = router;