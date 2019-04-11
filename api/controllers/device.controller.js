let state       = require('./state');
const response  = require('../utility/response');
const message   = require('../utility/message');

setInterval(() => {
    if(state.device.timer > 0 && state.device.info !== null) { 
        state.device.timer--;
    } else { 
        state.device.info = null; 
    }
},1000);

exports.device = async(req,res) => {
    if(state.device.info != null) {
        return res.json(response(200, message[201], state.device.info));
    } else {
        return res.json(response(401, message[202], null));
    }
}

exports.getTake = async(req,res) => {
    return res.json(response(200, message[206], state.device.take));
}

exports.setTake = async(req,res) => {
    return res.json(response(200, message[205], (state.device.take = req.body.take)));
}

exports.terminate = async(req,res) => {
    return res.json(response(200, message[204], (state.device.info = null)));
}

exports.initialize = async(req,res) => {
    state.device.timer = 5;
    return res.json(response(200, message[203], (state.device.info = req.body)));
}