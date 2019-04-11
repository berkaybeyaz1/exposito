const router     = require('express').Router();
const controller = require('../controllers/logoset.controller');

router.get  ('/', controller.getLogoset);
router.post ('/', controller.setOverlay);

module.exports = router;