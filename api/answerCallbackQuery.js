const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        callbackQueryId,
        text,
        showAlert,
        url
    } = req.body.args;

    if(!callbackQueryId) 
        throw new Error('Required fields: callbackQueryId');

    let bot = new TelegramBot(token);

    return bot.answerCallbackQuery(callbackQueryId, text, showAlert, {url});
}