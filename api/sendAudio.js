//http://www.w3schools.com/html/horse.mp3

const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        audio,
        caption,
        duration,
        performer,
        title,
        disableNotification,
        replyToMessageId,
        replyMarkup
    } = req.body.args;

    if(!token || !chatId || !audio) throw new Error('Required fields: token, chatId, audio');

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        caption:              caption,
        duration:             duration,
        performer:            performer,
        title:                title,
        disable_notification: disableNotification,
        reply_to_message_id:  replyToMessageId,
        reply_markup:         replyMarkup
    })

    return bot.sendAudio(chatId, audio, options);
}