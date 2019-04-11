const nodemailer = require('nodemailer');
const moment     = require('moment');
const fs         = require('fs');

let   state     = require('./state');
const paths     = require('../utility/paths');
const response  = require('../utility/response');
const message   = require('../utility/message');
const config    = require('../config/mailer.config');

const service = nodemailer.createTransport(config.service);

exports.test = async(req,res) => {
    service.sendMail(config.template(
        config.service.auth.user,               //Send mail to authorized account.
        message[501],                           //Preset mail header.
       (message[502] + moment().toString()),    //Send current timestamp.
       []                                       //No attachments.
    ), (err,info) => {
        if(err) { return res.json(response(401, message[402], err))}
        return res.json(response(200, message[401], info));
    });
}

exports.send = async(req,res) => {
    let imagePath = `${paths.public}/${state.photo.sum}.jpg`;
    service.sendMail(config.template(
        req.body.to,
        message[503],
        message[504],   
        [{path : imagePath}]
    ), (err, info) => {
        if(err) { return res.json(response(401, message[402], err))}
        fs.rename(imagePath, `${paths.archive}/${req.body.to}.jpg`, (err) => {  //Archive photo to public/archive/<mail>.jpg
            if(err) { return res.json(response(401, message[601], err))}
            return res.json(response(200, message[401], info));
        });
    })
}