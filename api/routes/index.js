const router = require('express').Router();

const logoset = require('./logoset.route');
const device  = require('./device.route');
const status  = require('./status.route');
const photo   = require('./photo.route');
const mail    = require('./mail.route');

router.use('/logoset', logoset);
router.use('/device',  device);
router.use('/status',  status);
router.use('/photo',   photo);
router.use('/mail',    mail);

module.exports = router;