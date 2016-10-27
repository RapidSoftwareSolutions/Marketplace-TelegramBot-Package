const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        userId
    } = req.body.args;

    if(!token || !chatId) throw new Error('Required fields: token, chatId');

    let bot = new TelegramBot(token);

    return bot.getChat(chatId);
}