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

    let required = lib.parseReq({token});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required)

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        chat_id:                  chatId,
        message_id:               messageId,
        inline_message_id:        inlineMessageId,
    })

    return bot.editMessageReplyMarkup(replyMarkup, options);
}