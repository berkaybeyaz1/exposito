const fs        = require('fs');

let state       = require('./state');
const response  = require('../utility/response');
const message   = require('../utility/message');
const paths     = require('../utility/paths');

exports.status = async(req,res) => {
    fs.readdir(paths.archive, (err, files) => {
        if(err) { return res.json(response(401, err.message, err)) }
        return res.json(response(200, message[101], { archived : files.length, state : state }));
    })
}