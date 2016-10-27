//http://www.gstatic.com/webp/gallery/1.webp

const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        sticker,
        caption,
        disableNotification,
        replyToMessageId,
        replyMarkup
    } = req.body.args;

    if(!token || !chatId || !sticker) throw new Error('Required fields: token, chatId, sticker');

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        caption:              caption,
        disable_notification: disableNotification,
        reply_to_message_id:  replyToMessageId,
        reply_markup:         replyMarkup
    })

    return bot.sendSticker(chatId, sticker, options);
}