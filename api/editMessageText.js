//49

const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

const safeParse   = (jstr) => {
    if(jstr && typeof jstr == 'string') {
        try {
            return JSON.parse(jstr);
        } catch(e) {
            throw new RapidError('JSON_VALIDATION');
        }
    }
}

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

    let required = lib.parseReq({token});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        chat_id:                  chatId,
        message_id:               messageId,
        inline_message_id:        inlineMessageId,
        parse_mode:               parseMode,
        disable_notification:     disableNotification,
        disable_web_page_preview: safeParse(disableWebPagePreview),
        reply_to_message_id:      replyToMessageId,
        reply_markup:             safeParse(replyMarkup)
    })

    return bot.editMessageText(text, options);
}