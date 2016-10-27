const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        file,
        caption,
        disableNotification,
        replyToMessageId,
        replyMarkup
    } = req.body.args;

    if(!token || !chatId || !file) throw new Error('Required fields: token, chatId, file');

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        caption:              caption,
        disable_notification: disableNotification,
        reply_to_message_id:  replyToMessageId,
        reply_markup:         replyMarkup
    })

    return bot.sendDocument(chatId, file, options);
}