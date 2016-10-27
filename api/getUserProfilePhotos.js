const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        userId,
        offset,
        limit
    } = req.body.args;

    if(!token || !userId) throw new Error('Required fields: token, userId');

    let bot = new TelegramBot(token);

    return bot.getUserProfilePhotos(userId, offset, limit);
}