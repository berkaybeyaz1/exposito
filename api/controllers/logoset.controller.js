const fs = require('fs');

let state       = require('./state');
const paths     = require('../utility/paths');
const response  = require('../utility/response');
const message   = require('../utility/message');

fs.readdir(paths.logoset, (err,files) => {
    if(err) { state.logoset.logos = null }
              state.logoset.logos = files;
});

exports.getLogoset = async(req,res) => {
    if(state.logoset.logos == null)     { return res.json(response(401, message[302], null)) }
    if(state.logoset.logos.length == 0) { return res.json(response(401, message[303], null)) }
    return res.json(response(200, message[301], (state.logoset.logos = files)));
}

exports.setOverlay = async(req,res) => {
    return res.json(response(200, message[304], (state.logoset.overlay = req.body.overlay)));    
}