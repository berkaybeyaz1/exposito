const router     = require('express').Router();
const controller = require('../controllers/photo.controller');

router.get  ('/',       controller.download);
router.post ('/',       controller.upload);
router.post ('/remove', controller.remove);

module.exports = router;