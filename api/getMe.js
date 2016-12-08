const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');
const fs          = require('fs');
const path        = require('path');

module.exports = (req, res) => {
    let {
        token,
    } = req.body.args;

    let required = lib.parseReq({token});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required)

    let bot = new TelegramBot(token);
    return bot.getMe();
}