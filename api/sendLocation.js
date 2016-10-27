// 50.4608806
// 30.6409787

const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        chatId,
        latitude,
        longitude,
        disableNotification,
        replyToMessageId,
        replyMarkup
    } = req.body.args;

    if(!token || !chatId || !latitude || !longitude) 
        throw new Error('Required fields: token, chatId, latitude, longitude');

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        longitude:            longitude,
        latitude:             latitude,
        disable_notification: disableNotification,
        reply_to_message_id:  replyToMessageId,
        reply_markup:         replyMarkup
    })

    return bot.sendLocation(chatId, latitude, longitude, options);
}