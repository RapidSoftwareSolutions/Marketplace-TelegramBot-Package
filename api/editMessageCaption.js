const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        messageId,
        inlineMessageId,
        caption,
        replyMarkup
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        chat_id:                  chatId,
        message_id:               messageId,
        inline_message_id:        inlineMessageId,
        reply_markup:             replyMarkup
    })

    return bot.editMessageCaption(caption, options);
}