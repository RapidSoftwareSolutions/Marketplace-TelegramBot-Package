const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        action
    } = req.body.args;

    if(!token || !chatId || !action) throw new Error('Required fields: token, chatId, action');

    let bot = new TelegramBot(token);

    return bot.sendChatAction(chatId, action);
}