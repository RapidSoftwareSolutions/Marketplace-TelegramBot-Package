//49

const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        messageId,
        inlineMessageId,
        text,
        parseMode,
        disableWebPagePreview,
        disableNotification,
        replyToMessageId,
        replyMarkup
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        chat_id:                  chatId,
        message_id:               messageId,
        inline_message_id:        inlineMessageId,
        parse_mode:               parseMode,
        disable_notification:     disableNotification,
        disable_web_page_preview: disableWebPagePreview,
        reply_to_message_id:      replyToMessageId,
        reply_markup:             replyMarkup
    })

    return bot.editMessageText(text, options);
}