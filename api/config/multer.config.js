const multer   = require('multer');
const checksum = require('checksum');

const public   = require('../utility/paths').public;
let   state    = require('../controllers/state');

module.exports = multer.diskStorage({
    destination : (req, file, next) => {next(null,   public)},
    filename    : (req, file, next) => {next(null,  (`${state.photo.sum = checksum(file.buffer)}.jpg`))}
})