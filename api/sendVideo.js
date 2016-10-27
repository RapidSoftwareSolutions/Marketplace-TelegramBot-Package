//http://www.w3schools.com/html/mov_bbb.mp4

const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        video,
        duration,
        width,
        height,
        caption,
        disableNotification,
        replyToMessageId,
        replyMarkup
    } = req.body.args;

    if(!token || !chatId || !video) throw new Error('Required fields: token, chatId, video');

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        duration:             duration,
        width:                width,
        height:               height,
        caption:              caption,
        disable_notification: disableNotification,
        reply_to_message_id:  replyToMessageId,
        reply_markup:         replyMarkup
    })

    return bot.sendVideo(chatId, video, options);
}