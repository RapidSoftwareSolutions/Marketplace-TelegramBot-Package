const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        gameShortName,
        disableNotification,
        replyToMessageId,
        replyMarkup
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        disable_notification: disableNotification,
        reply_to_message_id:  replyToMessageId,
        reply_markup:         replyMarkup
    })

    return bot.sendGame(chatId, gameShortName, options);
}