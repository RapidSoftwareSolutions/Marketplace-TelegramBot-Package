//https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg

const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        voice,
        duration,
        caption,
        disableNotification,
        replyToMessageId,
        replyMarkup
    } = req.body.args;

    if(!token || !chatId || !voice) throw new Error('Required fields: token, chatId, voice');

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        caption:              caption,
        duration:             duration,
        disable_notification: disableNotification,
        reply_to_message_id:  replyToMessageId,
        reply_markup:         replyMarkup
    })

    return bot.sendVoice(chatId, voice, options);
}