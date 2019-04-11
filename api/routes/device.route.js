const router     = require('express').Router();
const controller = require('../controllers/device.controller');

router.get  ('/',           controller.device);
router.get  ('/take',       controller.getTake);
router.post ('/take',       controller.setTake);
router.post ('/terminate',  controller.terminate);
router.post ('/initialize', controller.initialize);

module.exports = router;