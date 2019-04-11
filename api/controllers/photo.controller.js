const fs        = require('fs');
const sharp     = require('sharp');
const multer    = require('multer');

let   state     = require('./state');
const paths     = require('../utility/paths');
const response  = require('../utility/response');
const message   = require('../utility/message');
const config    = require('../config/multer.config');

const uploader  = multer({storage : config}).single('photo');

compositeFactory = (overlay) => {
    return {
        input   : `${paths.logoset}/${overlay}`,
        gravity : 'southwest'
    }
}

exports.download = async(req,res) => {
    if(state.photo.sum === null) { return res.json(response(401, message[702], null)); } 
    return res.json(response(200, message[701], state.photo.sum));
}

exports.upload = async(req,res) => uploader(req,res,(err) => {
    sharp(`${paths.public}/${state.photo.sum}.jpg`).composite([compositeFactory(state.logoset.logos[state.logoset.overlay])]).toBuffer((err,buffer) => {
        fs.writeFile(`${paths.public}/${state.photo.sum}.jpg`,buffer, (err) => {
            if(err) { return res.json(response(200, message[801], state.photo.sum));}
            return res.json(response(200, message[802], true));
        })
    });
});

exports.remove = async(req,res) => {
    fs.unlink(`${paths.public}/${state.photo.sum}.jpg`, (err) => {
        if(err) { return res.json(response(401, message[604], null)); }
        return res.json(response(200, message[605], (state.photo.sum = null)));
    });
}
