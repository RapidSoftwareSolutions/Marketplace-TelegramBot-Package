const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');
const fs          = require('fs');
const path        = require('path');

module.exports = (req, res) => {
    let {
        token,
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let bot = new TelegramBot(token);
    return bot.getMe();
}