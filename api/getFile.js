const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        fileId
    } = req.body.args;

    if(!token || !fileId) throw new Error('Required fields: token, fileId');

    let bot = new TelegramBot(token);

    return bot.getFile(fileId);
}