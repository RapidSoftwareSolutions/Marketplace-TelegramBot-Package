const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        userId
    } = req.body.args;

    if(!token || !chatId || !userId) throw new Error('Required fields: token, chatId, userId');

    let bot = new TelegramBot(token);

    return bot.kickChatMember(chatId, userId);
}