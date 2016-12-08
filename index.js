'use strict';
global.PACKAGE_NAME = "TelegramBot";

global.RapidError = function(code, fields) {
    let messages = {
        'REQUIRED_FIELDS':        'Please, check and fill in required fields.',
        'JSON_VALIDATION':        'Syntax error. Incorrect input JSON. Please, check fields with JSON input.',
        'INTERNAL_PACKAGE_ERROR': 'Something went wrong inside the package.'
    }

    this.status_code = code;
    this.status_msg  = messages[code];

    if(code == 'REQUIRED_FIELDS')
        this.fields  = fields || [];
}

RapidError.prototype = Object.create(Error.prototype);
RapidError.prototype.constructor = RapidError;

const express       = require('express');
const request       = require('request');
const bodyParser    = require('body-parser');
const lib           = require('./lib/functions.js');
const _             = lib.callback;

const PORT          = process.env.PORT || 8080;
const app           = express();
const API           = lib.init();

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.all(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

for(let route in API) {
    app.post(`/api/${PACKAGE_NAME}/${route}`, _(function* (req, res) {
        let r  = {
            callback     : "",
            contextWrites: {}
        };
        let to = req.body.args.to || 'to';
        let response;

        try {
            response            = yield API[route](req, res);
            r.callback          = 'success';
            r.contextWrites[to] = response;
        } catch(e) {
            r.callback          = 'error';
            r.contextWrites['to'] = e.status_code ? e : { status_code: "API_ERROR", status_msg:  e.message ? e.message : e };
        }

        res.status(200).send(r);
    }));
}

app.listen(PORT);
module.exports = app;