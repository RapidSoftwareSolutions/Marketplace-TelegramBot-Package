const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        text,
        parseMode,
        disableWebPagePreview,
        disableNotification,
        replyToMessageId,
        replyMarkup
    } = req.body.args;
    
    let required = lib.parseReq({token, chatId, text});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required)

    if(replyMarkup && typeof replyMarkup == 'string') {
        try {
            replyMarkup = JSON.parse(replyMarkup);
        } catch(e) {
            throw new RapidError('JSON_VALIDATION');
        }   
    }

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        parse_mode:               parseMode,
        disable_notification:     disableNotification,
        disable_web_page_preview: disableWebPagePreview,
        reply_to_message_id:      replyToMessageId,
        reply_markup:             replyMarkup
    })

    return bot.sendMessage(chatId, text, options);
}