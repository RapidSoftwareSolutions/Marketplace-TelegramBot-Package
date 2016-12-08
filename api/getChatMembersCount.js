const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        userId
    } = req.body.args;

    let required = lib.parseReq({token, chatId});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required)

    let bot = new TelegramBot(token);

    return bot.getChatMembersCount(chatId);
}